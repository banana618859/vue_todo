<!--
 * @Descripttion: 
 * @Author: yizheng.yuan
 * @Date: 2019-11-30 16:38:11
 * @LastEditors: yizheng.yuan
 * @LastEditTime: 2019-11-30 16:56:18
 -->
<template>
  <div class="hello">
    <h2>vue-todo-demo</h2>
    <input 
      v-model="todo" 
      @keyup.enter="addTodo" />
      <button @click="addTodo">add</button>
    <hr>
    <div style="width:200px; margin:10px auto; border:1px solid #eee; text-align: left;">
      <ul>
        <li style="width:100%; margin-bottom: 5px;"
          v-for="(item,index) in todos" :key=item+index
          >
          {{item}} -- 
          <button @click="delTodo(item)">删除</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      todo: '',
      todos: [
        'todo1',
        'todo2'
      ]
    }
  },
  methods:{
    addTodo(){
      this.todos.push(this.todo);
      this.todo = ''
    },
    delTodo(item){
      for(let i=0; i<this.todos.length;i++){
        if(this.todos[i] == item){
          this.todos.splice(i,1)
        }
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
