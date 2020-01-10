<!--
 * @Descripttion: 
 * @Author: yizheng.yuan
 * @Date: 2020-01-09 17:50:54
 * @LastEditors  : yizheng.yuan
 * @LastEditTime : 2020-01-10 08:05:37
 -->
<template>
    <div>
        <h3 class="title">菜单栏：</h3>
        <ul>
            <li>
                <router-link to="/hello">hello</router-link>
            </li>
            <li>
                <router-link to="/NewPage">测试配置</router-link>
            </li>
        </ul>
    </div>
</template>

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