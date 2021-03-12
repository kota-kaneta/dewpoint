import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')

var VueScrollTo = require('vue-scrollto');
Vue.use(VueScrollTo)

Vue.config.productionTip = false
