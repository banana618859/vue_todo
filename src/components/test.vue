<!--
 * @Descripttion: 
 * @Author: yizheng.yuan
 * @Date: 2020-01-11 14:05:31
 * @LastEditors  : yizheng.yuan
 * @LastEditTime : 2020-01-15 13:43:43
 -->
<template>

    <div style="padding: 5px;">
        <div style="float: left; padding:20px 10px; width: 300px; border: 1px solid #ccc; overflow: auto;">
            <p style="padding:5px; border-bottom:1px solid #eee;">
                <el-button type="primary" size="mini" @click="addTopMenu">
                    添加顶级目录
                </el-button>
            </p>
            <el-tree :data="cMenu" show-checkbox node-key="id" default-expand-all :expand-on-click-node="false">
                <span class="custom-tree-node" slot-scope="{ node, data }">
                    <span>{{ data.title }}</span>
                    <span>
                        <el-button type="text" size="mini" @click="() => showAddMenuFun(data)">
                            <i class="el-icon-circle-plus-outline font18"></i>
                        </el-button>
                        <el-button type="text" size="mini" @click="() => remove(node, data)">
                            <i class="el-icon-remove-outline font18"></i>
                        </el-button>
                    </span>
                </span>
            </el-tree>
        </div>
        <div style="margin-left: 10px; float: left;">
            <h3>展示区域</h3>
            <el-table :data="tableData" stripe border ref="tableDataRef">
                <el-table-column type="selection" width="55" align="center"></el-table-column>
                <el-table-column type="index" width="55" label="序号" align="center"></el-table-column>
                <el-table-column v-if="colData[0].istrue" prop="name" label="名称" align="center"></el-table-column>
                <el-table-column v-if="colData[1].istrue" prop="sex" label="性别" align="center"></el-table-column>
                <el-table-column v-if="colData[2].istrue" prop="age" label="年龄" align="center"></el-table-column>
                <el-table-column v-if="colData[3].istrue" prop="date" label="时间" align="center"></el-table-column>
                <el-table-column v-if="colData[4].istrue" prop="note" label="事件" align="center"></el-table-column>
                <el-table-column v-if="colData[5].istrue" prop="range" label="地点" align="center"></el-table-column>
            </el-table>


            <el-popover placement="right" width="400" trigger="click">
                <el-checkbox-group v-model="colOptions">
                    <el-checkbox v-for="item in colSelect" :label="item" :key="item"></el-checkbox>
                </el-checkbox-group>
                <el-button slot="reference">设置</el-button>
            </el-popover>
            <!-- https://blog.csdn.net/weixin_43551840/article/details/92804040 -->
        </div>

        <el-dialog title="Add menu" :visible.sync="showAddMenu" width="30%">
            <el-input v-model="menuName"></el-input>
            <span slot="footer" class="dialog-footer">
                <el-button @click="showAddMenu = false">取 消</el-button>
                <el-button type="primary" @click="addMenu">确 定</el-button>
            </span>
        </el-dialog>
    </div>

</template>

<script>
    let id = 1000;
    import { mapState } from 'vuex';
    export default {
        data() {
            const data = [{
                id: 1,
                label: '一级 1',
                children: [{
                    id: 4,
                    label: '二级 1-1',
                    children: [{
                        id: 9,
                        label: '三级 1-1-1'
                    }, {
                        id: 10,
                        label: '三级 1-1-2'
                    }]
                }]
            }, {
                id: 2,
                label: '一级 2',
                children: [{
                    id: 5,
                    label: '二级 2-1'
                }, {
                    id: 6,
                    label: '二级 2-2'
                }]
            }, {
                id: 3,
                label: '一级 3',
                children: [{
                    id: 7,
                    label: '二级 3-1'
                }, {
                    id: 8,
                    label: '二级 3-2'
                }]
            }];
            return {
                myArr: [1, 2, 3],
                routePath: '',
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
                colSelect: ["名称", "性别", "年龄", "时间", "事件", "地点",],
                addMenuType: '',
                showAddMenu: false,
                menuName: '测试配置',
                currentNode: null,
                data: JSON.parse(JSON.stringify(data))
            }
        },
        computed: {
            ...mapState(['menu']),
            cMenu() {
                console.log('menu-test-vuex-change:', this.menu)
                let newMenu = this.menu
                return newMenu
            }
        },
        mounted() {
        },
        watch: {
            colOptions(valArr) {
                var arr = this.colSelect.filter(i => valArr.indexOf(i) < 0); // 未选中
                this.colData.filter(i => {
                    if (arr.indexOf(i.title) != -1) {
                        i.istrue = false;
                        this.$nextTick(() => {
                            this.$refs.tableDataRef.doLayout();
                        });
                    } else {
                        i.istrue = true;
                        this.$nextTick(() => {
                            this.$refs.tableDataRef.doLayout();
                        });
                    }
                });
            }
        },
        methods: {
            addTopMenu() {
                this.showAddMenu = true;
                this.addMenuType = 'top'
            },
            showAddMenuFun(data) {
                this.addMenuType = 'normal'
                console.log('data:', data)
                this.currentNode = data;
                this.showAddMenu = true;
            },
            addMenu() {
                let ida = id++;
                this.routePath = '/testSon/' + ida;
                const newNode = { id: ida, href: this.routePath, title: this.menuName };
                if (this.addMenuType == 'top') {
                    this.$store.commit('addMenu', newNode)
                } else {
                    console.log('menu-name:', this.menuName, this.currentNode)
                    // this.appenda(this.currentNode, this.menuName)
                    let obj = {
                        father: this.currentNode,
                        son: newNode
                    }

                    this.$store.commit('updateMenu', obj)
                }
                this.showAddMenu = false;
                // 将最新的菜单更新到vuex里面

            },
            appenda(data, nodeName) {
                console.log('data:', data)
                const newChild = { id: id++, title: nodeName, children: [] };
                if (!data.children) {
                    this.$set(data, 'children', []);
                }
                data.children.push(newChild);
            },
            append(data) {
                console.log('data:', data)
                const newChild = { id: id++, label: 'testtest', children: [] };
                if (!data.children) {
                    this.$set(data, 'children', []);
                }
                data.children.push(newChild);
            },

            remove(node, data) {
                const parent = node.parent;
                const children = parent.data.children || parent.data;
                const index = children.findIndex(d => d.id === data.id);
                children.splice(index, 1);
            },

            renderContent(h, { node, data, store }) {
                return (
                    <span class="custom-tree-node">
                        <span>{node.label}</span>
                        <span>
                            <el-button size="mini" type="text" on-click={() => this.append(data)}>Append</el-button>
                            <el-button size="mini" type="text" on-click={() => this.remove(node, data)}>Delete</el-button>
                        </span>
                    </span>);
            }
        }
    };
</script>

<style scoped>
    * {
        box-sizing: border-box;
    }

    .font18 {
        font-size: 18px;
    }

    .custom-tree-node {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 14px;
        padding-right: 8px;
    }
</style>