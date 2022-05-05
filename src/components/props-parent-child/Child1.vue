<template>
  <div>
    <h3>Child 1</h3>
    <p>{{ name }}</p>
    <button @click="changeTextChild1()">Change text child 1</button>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
  },
  methods: {
    changeTextChild1() {
      this.name = 'Change Text Child 1';
      this.$emit('change-text-child1', this.name);
    },
  },
};
</script>