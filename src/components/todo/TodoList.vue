<template>
  <div>
    <h2>Danh sách công việc cần làm</h2>
    <todo-item v-for="(todo, index) in todos" :key="index" :todo="todo" />
    <input type="text" v-model="inputTodo" />
    <button @click="addTodo($event, inputTodo)">Thêm công việc</button>
  </div>
</template>

<script>
import TodoItem from './TodoItem.vue';

export default {
  name: 'todo-list',
  components: {
    TodoItem,
  },
  data() {
    return {
      inputTodo: '',
      todos: [
        { title: 'đi chợ', completed: false },
        { title: 'đi học', completed: true },
        { title: 'đi ngủ', completed: true },
        { title: 'đi chơi', completed: false },
      ],
    };
  },
  methods: {
    addTodo(event, inputTodo) {
      event.preventDefault();
      this.todos.push({ title: inputTodo, completed: false });
    },
  },
};
</script>
