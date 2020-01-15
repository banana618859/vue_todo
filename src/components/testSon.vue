<!--
 * @Descripttion: 
 * @Author: yizheng.yuan
 * @Date: 2020-01-11 15:08:09
 * @LastEditors  : yizheng.yuan
 * @LastEditTime : 2020-01-15 13:51:00
 -->
<template>
    <div style="padding:10px">
        <p>
            <el-button type="primary" @click="saveConfig">保存</el-button>
        </p>
        <el-checkbox-group v-model="baseConfig.checkList"
            v-if="baseConfig && baseConfig.component && baseConfig.component.length>0">

            <ul>
                <li v-for="(item,index) in baseConfig.component" :key="item.name">
                    <p>
                        <el-checkbox :label="item.name" @change="selectChange(item)" name="checkList">
                        </el-checkbox>
                    </p>
                    <template v-if="baseConfig.checkList.includes(item.name) && item.name == '表格'">
                        <el-table :data="baseConfig.tableData" stripe border ref="tableDataRef">
                            <el-table-column type="selection" width="55" align="center"></el-table-column>
                            <el-table-column type="index" width="55" label="序号" align="center"></el-table-column>
                            <el-table-column v-if="baseConfig.colData[0].istrue" prop="name" label="名称" align="center">
                            </el-table-column>
                            <el-table-column v-if="baseConfig.colData[1].istrue" prop="sex" label="性别" align="center">
                            </el-table-column>
                            <el-table-column v-if="baseConfig.colData[2].istrue" prop="age" label="年龄" align="center">
                            </el-table-column>
                            <el-table-column v-if="baseConfig.colData[3].istrue" prop="date" label="时间" align="center">
                            </el-table-column>
                            <el-table-column v-if="baseConfig.colData[4].istrue" prop="note" label="事件" align="center">
                            </el-table-column>
                            <el-table-column v-if="baseConfig.colData[5].istrue" prop="range" label="地点" align="center">
                            </el-table-column>
                        </el-table>
                        <el-popover placement="right" width="400" trigger="click">
                            <el-checkbox-group v-model="baseConfig.colOptions">
                                <el-checkbox v-for="item in baseConfig.colSelect" :label="item" :key="item">
                                </el-checkbox>
                            </el-checkbox-group>
                            <el-button slot="reference" style="margin-top: 5px;">设置</el-button>
                        </el-popover>
                    </template>

                    <template v-if="baseConfig.checkList.includes(item.name) && item.name == '表单'">
                        <el-form ref="form" :model="baseConfig.form" label-width="80px">
                            <el-form-item label="姓名">
                                <el-input v-model="baseConfig.form.name"></el-input>
                            </el-form-item>
                            <el-form-item label="年龄">
                                <el-input v-model="baseConfig.form.age"></el-input>
                            </el-form-item>
                        </el-form>
                    </template>
                </li>
            </ul>

        </el-checkbox-group>

    </div>
</template>

<script>
    import { mapState } from 'vuex';
    export default {
        data() {
            return {
                baseConfig: null
            };
        },
        created() {
            console.log('created')
        },
        mounted() {
            console.log('mounted2')
            console.log('thePath2:', this.$route.path);
            this.changeConf();
        },
        update() {
            console.log('--update')
        },
        computed: {
            ...mapState(['firstConf', 'config'])
        },
        watch: {
            $route(to, from) {
                console.log('testSon路由变化了：', to.path);
                this.changeConf();
                console.log('-----此处可以请求后台数据，更新页面-----')
            },
            'baseConfig.colOptions'(valArr) {
                var arr = this.baseConfig.colSelect.filter(i => valArr.indexOf(i) < 0); // 未选中
                this.baseConfig.colData.filter(i => {
                    if (arr.indexOf(i.title) != -1) {
                        i.istrue = false;
                        this.$nextTick(() => {
                            console.log('_this.$refs.tableDataRef', this.$refs.tableDataRef)
                            // this.$refs.tableDataRef.doLayout();
                        });
                    } else {
                        i.istrue = true;
                        this.$nextTick(() => {
                            // this.$refs.tableDataRef.doLayout();
                        });
                    }
                });
            }
        },
        methods: {
            changeConf() {
                if (this.config && this.config.length > 0) {
                    let index = -1;
                    for (let i = 0; i < this.config.length; i++) {
                        if (this.config[i].id == this.$route.path) {
                            index = i
                        }
                    }
                    if (index != -1) {
                        this.baseConfig = JSON.parse(JSON.stringify(this.config[index]))
                    } else {
                        this.baseConfig = JSON.parse(JSON.stringify(this.firstConf));
                    }
                } else {
                    this.baseConfig = JSON.parse(JSON.stringify(this.firstConf));
                }
            },
            selectChange(item) {
                console.log('item:', item)
            },
            saveConfig() {
                let config = this.baseConfig;
                config.id = this.$route.path
                console.log('--list:', config)
                this.$store.commit('saveConfig', config)
                this.$message({
                    message: '保存成功！',
                    type: 'success'
                })
            }
        }
    };
</script>

<style>
    ul li {
        margin-bottom: 15px;
    }
</style>