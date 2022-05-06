<template>
  <div>
    <div :class="{ 'btn-on': value }" @click="handleSwitch(true)">On</div>
    <div :class="{ 'btn-off': !value }" @click="handleSwitch(false)">Off</div>
    <div v-bgcolor="'red'">Custom directive with value</div>
    <div v-custom="'blue'">Custom directive with argument</div>
    <div v-modifiers.delayed="'blue'">Custom directive with modifiers</div>
  </div>
</template>

<script>
export default {
  props: ['value'],
  methods: {
    handleSwitch(isOn) {
      this.$emit('input', isOn);
    },
  },
};
</script>

<style scoped>
.btn-on {
  color: green;
}
.btn-off {
  color: red;
}
</style>
