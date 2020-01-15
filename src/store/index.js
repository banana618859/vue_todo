/*
 * @Descripttion: 
 * @Author: yizheng.yuan
 * @Date: 2020-01-11 15:13:39
 * @LastEditors  : yizheng.yuan
 * @LastEditTime : 2020-01-15 12:57:18
 */
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

var state = {
    msg: 'vuex-msg',
    menu: [],
    firstConf: {
        name: 'firstConf',
        component: [
            {
                name: '表格',
                option: [],
                show: true
            },
            {
                name: '表单',
                option: [],
                show: true
            }
        ],
        checkList: ['表格', '表单'],
        form: {
            name: 'tom',
            age: 18
        },
        tableData: [
            {
                name: '小王',
                sex: '男',
                age: 12,
                date: '2019.10.10',
                note: '去公园',
                range: '公园'
            },
            {
                name: '小芳',
                sex: '女',
                age: 13,
                date: '2019.10.10',
                note: '去公园',
                range: '公园'
            }
        ],
        colData: [{ title: "名称", istrue: true },
        { title: "性别", istrue: true },
        { title: "年龄", istrue: true },
        { title: "时间", istrue: true },
        { title: "事件", istrue: true },
        { title: "地点", istrue: true }],
        colOptions: ["名称", "性别", "年龄", "时间", "事件", "地点",], //默认全选
        colSelect: ["名称", "性别", "年龄", "时间", "事件", "地点",]
    },
    config: []
}
var mutations = {
    changeBaseConfig(state, data) {
        let indx = -1;
        for (let i = 0; i < state.config.length; i++) {
            if (state.config[i].id == data) {
                indx = i;
                break;
            }
        }
        if (indx != -1) {
            console.log('--旧页面--')
            Vue.set(state, 'baseConfig', state.config[indx])
        } else {
            console.log('--新的页面--')
            Vue.set(state, 'baseConfig', state.baseConf)
        }

        // Vue.set(state, 'baseConfig', data)
        // state.baseConfig = data;
    },
    changeCurrentConf(state, data) {
        let indx = -1;
        for (let i = 0; i < state.config.length; i++) {
            if (state.config[i].id == data) {
                indx = i
            }
        }
        if (indx = -1) {
            state.currentConf = state.baseConf
        } else {
            state.currentConf = state.config[indx]
            console.log('state.currentConf:', state.currentConf)
        }
    },
    saveConfig(state, data) {
        console.log('vuex-data:', data, state.config)
        // 判断是否存在，如果存在就替换，否则添加
        let indx = -1;
        if (state.config && state.config.length > 0) {
            for (let i = 0; i < state.config.length; i++) {
                if (state.config[i].id == data.id) {
                    state.config.splice(i, 1, data)
                    indx = i;
                    break;
                }
            }
            if (indx == -1) {
                state.config.push(data);
            }
        } else {
            state.config.push(data);
        }

        // Vue.set(state, 'baseConfig', data)
    },
    saveMenu(state, data) {
        console.log('data:', data)
        state.menu = data;
    },
    addMenu(state, data) {
        state.menu.push(data);
    },
    updateMenu(state, data) {
        // 创建一个新的对象，将info,state.personInfo对象复制到新对象中
        // let data = Object.assign({}, state.personInfo, info);
        // // 将state.personInfo指向新对象的引用地址
        // state.personInfo = data;
        for (let i = 0; i < state.menu.length; i++) {
            if (state.menu[i].title == data.father.title) {
                if (!state.menu[i].children) {
                    Vue.set(state.menu[i], 'children', []);
                    // state.menu[i].children = []
                }
                state.menu[i].children.push(data.son);
                break;
            } else {
                if (state.menu[i].children && state.menu[i].children.length > 0) {
                    let son = state.menu[i].children
                    loopFun(son, data)
                }
                function loopFun(son, data) {
                    for (let i = 0; i < son.length; i++) {
                        if (son[i].title == data.father.title) {
                            if (!son[i].children) {
                                Vue.set(son[i], 'children', []);
                            }
                            son[i].children.push(data.son);
                            break;
                        } else {
                            if (son[i].children && son[i].children.length > 0) {
                                let sun = son[i].children
                                // 这一步完成了迭代-递归
                                loopFun(sun, data)
                            }
                        }
                    }
                }
            }
        }
    }
}
var actions = {
}
var getters = {

    getMenu(state) {
        // 改造一下
        let theMenu = state.menu;
        for (let i = 0; i < theMenu.length; i++) {
            if (theMenu[i].children && theMenu[i].children.length > 0) {
                theMenu[i].child = theMenu[i].children
                doLoop(theMenu[i].child)
            }
            function doLoop(son) {
                for (let s = 0; s < son.length; s++) {
                    if (son[s].children && son[s].children.length > 0) {
                        son[s].child = son[s].children
                        // 这里迭代
                        doLoop(son[s].child)
                    } else {
                        break
                    }
                }
            }
        }
        return theMenu;
    }
}
console.log(Vuex)
var store = new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})

export default store;