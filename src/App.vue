<template>
  <div id="app">
    <TodoList />
    <Parent />
  </div>
</template>

<script>
import TodoList from './components/todo/TodoList.vue'
import Parent from './components/props-parent-child/Parent.vue'

export default {
  name: 'App',
  components: {
    TodoList,
    Parent
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
