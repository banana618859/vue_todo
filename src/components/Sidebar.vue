<!--
 * @Descripttion: 
 * @Author: yizheng.yuan
 * @Date: 2020-01-09 17:50:54
 * @LastEditors  : yizheng.yuan
 * @LastEditTime : 2020-01-12 06:31:39
 -->
<template>
    <div>
        <!-- <h3 class="title">菜单栏：</h3> -->
        <!-- <ul>
            <li>
                <router-link to="/hello">hello</router-link>
            </li>
            <li>
                <router-link to="/NewPage">测试配置</router-link>
            </li>
        </ul> -->
        <sidebar-menu :menu="theMenu" width="200px">
            <span slot="dropdown-icon">
                <i class="el-icon-caret-right"></i>
            </span>
            <span slot="toggle-icon">
                <i class="el-icon-s-tools"></i>
            </span>
        </sidebar-menu>
    </div>
</template>

<script>
    import { SidebarMenu } from 'vue-sidebar-menu';
    import { mapState } from 'vuex';
    export default {
        data() {
            return {
                newMenu: null
            }
        },
        computed: {
            ...mapState(['menu']),
            concatMenu() {
                console.log('menu-sideBar-change:', this.menu)
                this.newMenu = this.menu
                return this.newMenu
            },
            theMenu() {
                console.log('newGet:', this.$store.getters.getMenu)
                return this.$store.getters.getMenu
            }
        },
        watch: {
            'menu.children': {
                handler(newName, oldName) {
                    console.log('obj.a changed', newName);
                },
                immediate: true
            }
        },
        components: {
            SidebarMenu
        }
    }
</script>

<style scoped>
    ul li {
        height: 30px;
        line-height: 30px;
        padding: 0 10px;

    }

    .title {
        height: 45px;
        line-height: 45px;
        background-color: rebeccapurple;
        color: #eee;
        padding: 0 10px;
    }
</style>