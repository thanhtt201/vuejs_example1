import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;
// custom directive with value
Vue.directive('bgcolor', {
  bind(el, binding, vnode) {
    el.style.backgroundColor = binding.value;
  },
});
// custom directive with argument
Vue.directive('custom', {
  bind(el, binding, vnode) {
    if (binding.arg == 'background') {
      el.style.backgroundColor = binding.value;
    } else {
      el.style.color = binding.value;
    }
  },
});
// custom directive with modifiers
Vue.directive('modifiers', {
  bind(el, binding, vnode) {
    var delay = 0;
    if (binding.modifiers['delayed']) {
      delay = 3000;
    }

    setTimeout(() => {
      if (binding.arg == 'background') {
        el.style.backgroundColor = binding.value;
      } else {
        el.style.color = binding.value;
      }
    }, delay);
  },
});

new Vue({
  render: (h) => h(App),
}).$mount('#app');
