<template>
  <div>
    <h1>{{ name }}</h1>
    <button @click="handleChangeText()">Change text parent</button>
    <div class="block">
      <Child1 :name="name" @change-text-child1="changeTextChild1($event)" />
      <Child2 :name="name" @change-text-child2="changeTextChild2($event)" />
    </div>
  </div>
</template>

<script>
import Child1 from "./Child1.vue";
import Child2 from "./Child2.vue";

export default {
  components: {
    Child1,
    Child2,
  },
  data() {
    return {
      name: "Trần Tiến Thành",
    };
  },
  methods: {
    handleChangeText() {
      this.name = "Change text Parent";
    },
    changeTextChild1(event) {
      this.name = event;
    },
    changeTextChild2(event) {
      this.name = event;
    },
  },
};
</script>

<style scoped>
.block {
  width: 400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
}
</style>