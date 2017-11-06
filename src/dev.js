import 'resolution';
import Vue from 'vue'
import Dev from './dev/dev.vue'


Vue.config.debug = true;
Vue.config.devtools = true;



/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: {Dev},
  data () {
    return {}
  },
  methods: {
  },
  render: function (createElement) {
    return createElement('div', [
      createElement(Dev),
    ])
  }
});
