<template>
  <div>
    <h2>This is Contact Card</h2>
    <button @click="count++">Increase</button>
    {{ count }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
    };
  },
  // khi chuyển component thì sẽ created component đó và deactived component trc và actived component đó
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