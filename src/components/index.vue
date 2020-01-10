<!--
 * @Descripttion: 
 * @Author: yizheng.yuan
 * @Date: 2020-01-09 17:08:46
 * @LastEditors  : yizheng.yuan
 * @LastEditTime : 2020-01-09 17:52:32
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
        height: 100vh;
        padding-left: 200px;
        border: 1px solid rebeccapurple;
    }
</style>