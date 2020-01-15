<!--
 * @Descripttion: 
 * @Author: yizheng.yuan
 * @Date: 2020-01-09 17:08:46
 * @LastEditors  : yizheng.yuan
 * @LastEditTime : 2020-01-12 18:53:04
 -->
<template>
    <div>
        <div class="leftMenu">
            <Sidebar></Sidebar>

        </div>
        <div class="main">
            <router-view />
        </div>
    </div>
</template>

<script>
    import Sidebar from './Sidebar'
    export default {
        created() {
            let menu = [
                {
                    href: '/',
                    title: 'hello',
                    icon: 'el-icon-s-home'
                },
                {
                    href: '/NewPage',
                    title: 'Charts',
                    icon: 'el-icon-s-unfold'
                },
                {
                    href: '/test',
                    title: '配置目录',
                    icon: 'el-icon-s-fold'
                }
            ]

            // 将菜单数据提交到vuex里面
            this.$store.commit('saveMenu', menu)
        },
        components: {
            Sidebar
        }
    }
</script>

<style>
    .leftMenu {
        width: 200px;
        position: absolute;
        top: 0;
        left: 0;
        height: 100vh;
        border: 1px solid red;
        background-color: #eee;
    }

    .main {
        padding-left: 200px;
        overflow: auto;
    }
</style>