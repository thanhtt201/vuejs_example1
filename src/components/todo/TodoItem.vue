<template>
  <div>
    <li>
      <input type="checkbox" v-model="todo.completed" />
      <span :class="{ 'todo-completed': todo.completed }">{{ todo.title }}</span>
    </li>
  </div>
</template>

<script>
export default {
  name: 'todo-item',
  props: ['todo'],
};
</script>

<style scoped>
.todo-completed {
  text-decoration: line-through;
}
</style>