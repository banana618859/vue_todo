<!--
 * @Descripttion: 
 * @Author: yizheng.yuan
 * @Date: 2020-01-09 17:18:06
 * @LastEditors  : yizheng.yuan
 * @LastEditTime : 2020-01-10 08:48:07
 -->
<template>
    <div>
        <div style="padding:5px 10px;">
            <el-input v-model="keyWord" style="width: 200px;"></el-input>
            <el-button type="success">搜索</el-button>
            <el-button @click="addTest" type="primary">添加测试</el-button>
        </div>
        <div style="padding:5px 10px;">
            <el-table :data="tableData" height="250" border style="width: 100%">
                <el-table-column prop="id" label="ID" width="180">
                </el-table-column>
                <el-table-column prop="name" label="测试名" width="180">
                </el-table-column>
                <el-table-column prop="deal" label="处理">
                    <template slot-scope="scope">
                        <el-button type="primary" @click="showDetail(scope.row)">详情</el-button>
                        <el-button type="danger" @click="delOne(scope.row)">删除</el-button>
                    </template>

                </el-table-column>
            </el-table>
        </div>
        <div style="padding:10px 15px;" class="testDetail">
            <h3>测试详情页</h3>
            <p>测试ID：{{currentOne.id}}</p>
            <p>测试名称：{{currentOne.name}}</p>
            <p>测试内容：{{currentOne.content}}</p>
        </div>

        <el-dialog title="添加测试" :visible.sync="showAddTest" width="30%">
            <el-input v-model="testName"></el-input>
            <span slot="footer" class="dialog-footer">
                <el-button @click="showAddTest = false">取 消</el-button>
                <el-button type="primary" @click="addTestFun">确 定</el-button>
            </span>
        </el-dialog>


    </div>
</template>

<script>
    export default {
        data() {
            return {
                keyWord: '',
                showAddTest: false,
                testName: '',
                currentOne: null,
                tableData: [{
                    id: '1',
                    name: '测试1',
                    content: '测试内容1'
                }, {
                    id: '2', name: '测试2',
                    content: '测试内容2'
                }, {
                    id: '3',
                    name: '测试3',
                    content: '测试内容3'
                }, {
                    id: '4',
                    name: '测试4',
                    content: '测试内容4'
                }]
            }
        },
        created() {
            this.currentOne = this.tableData[0]
        },
        methods: {
            addTestFun() {
                let demo = {
                    id: 0,
                    name: '测试',
                    content: '测试内容'
                }
                let len = this.tableData.length + 1;
                let kes = Object.keys(demo);
                kes.forEach(key => {
                    if (key == 'id') {
                        demo[key] = len
                    } else if (key == 'name') {
                        demo[key] = this.testName
                    }
                    else {
                        demo[key] = demo[key] + len
                    }

                })
                this.tableData.unshift(demo);
                this.showAddTest = false;
                this.$message({
                    message: '添加成功',
                    type: 'success'
                })
            },
            showDetail(row) {
                console.log('row:', row);
                this.currentOne = row;
            },
            delOne(row) {
                console.log('del-row:', row)
            },
            addTest() {
                this.showAddTest = true;
            }
        }
    }

</script>

<style>
    .testDetail h3 {
        margin-bottom: 10px;
    }

    .testDetail p {
        height: 30px;
        line-height: 30px;
    }
</style>