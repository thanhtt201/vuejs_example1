<template>
  <div>
    <h3>Child 2</h3>
    <p>{{ name }}</p>
    <button @click="changeTextChild2()">Change text child 2</button>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
  },
  methods: {
    changeTextChild2() {
      this.name = 'Change Text Child 2';
      this.$emit('change-text-child2', this.name);
    },
  },
};
</script>