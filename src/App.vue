<!--
 * @Descripttion: 
 * @Author: yizheng.yuan
 * @Date: 2019-11-30 16:38:11
 * @LastEditors  : yizheng.yuan
 * @LastEditTime : 2020-01-09 17:15:03
 -->
<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style>
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    /* margin-top: 60px; */
  }
</style>