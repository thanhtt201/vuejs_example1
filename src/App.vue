<template>
  <div id="app">
    <TodoList />
    <Parent />
    <!-- công dụng của slot và multi-slot -->
    <SlotForComponent>
      <h2 slot="title">Công dụng của slot</h2>
      <div slot="content">
        slot trong component con để chèn những element cố định trong element cha
        truyền xuống!!!
      </div>
    </SlotForComponent>
    <!-- Chuyển đổi giữa các component -->
    <!-- khi chuyển đổi từ component này qua component khác thì component trc 
      đó sẽ bị reset lại lifecycle ==> bị destroyed -->
    <!-- cách khắc phục là đưa component vào trong thẻ <keep-alive> -->
    <div>
      <button @click="selectedCard = 'homeCard'">HomeCard</button>
      <button @click="selectedCard = 'aboutCard'">AboutCard</button>
      <button @click="selectedCard = 'contactCard'">ContactCard</button>
      {{ selectedCard }}
    </div>
    <keep-alive>
      <component :is="selectedCard"></component>
    </keep-alive>
    <!-- bind dữ liệu với form -->
    <form action="">
      <!-- tác dụng của modify input: lazy là khi ko focus vào input đó thì data ms đc hiển thị -->
      <input type="text" v-model.lazy="title" />
      <p>{{ title }}</p>
      <textarea cols="30" rows="10" v-model="description"></textarea>
      <!-- white-space: pre giữ nguyên code -->
      <p style="white-space: pre">{{ description }}</p>
      <input type="checkbox" value="option 1" v-model="option" />Option 1
      <input type="checkbox" value="option 2" v-model="option" />Option 2
      <input type="checkbox" value="option 3" v-model="option" />Option 3
      <li>{{ option }}</li>
      <input type="radio" value="Male" v-model="gender" /> Nam
      <input type="radio" value="Female" v-model="gender" /> Nữ
      <li>{{ gender }}</li>
      <select @change="changeSelected($event)">
        <option v-for="item in level" :key="item" :selected="item === 'Low'">
          {{ item }}
        </option>
      </select>
      {{ level }}
    </form>
  </div>
</template>

<script>
import TodoList from './components/todo/TodoList.vue';
import Parent from './components/props-parent-child/Parent.vue';
import SlotForComponent from './components/SlotForComponent.vue';
import HomeCard from './components/card/HomeCard.vue';
import AboutCard from './components/card/AboutCard.vue';
import ContactCard from './components/card/ContactCard.vue';

export default {
  name: 'App',
  components: {
    TodoList,
    Parent,
    SlotForComponent,
    homeCard: HomeCard,
    aboutCard: AboutCard,
    contactCard: ContactCard,
  },
  data() {
    return {
      selectedCard: 'homeCard',
      title: '',
      description: '',
      option: [],
      gender: 'Male',
      level: ['High', 'Medium', 'Low'],
    };
  },
  methods: {
    changeSelected(event) {
      console.log(
        'event',
        event.target.options[event.target.options.selectedIndex].text,
      );
    },
  },
};
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
