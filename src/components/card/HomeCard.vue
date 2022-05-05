<template>
  <h2>This Home Card</h2>
</template>

<script>
export default {
  created() {
    console.log('Created');
  },
  deactivated() {
    console.log('Deactivated');
  },
  activated() {
    console.log('Activated');
  },
  destroyed() {
    console.log('Destroyed');
  },
};
</script>