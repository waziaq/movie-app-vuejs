import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import VueMeta from 'vue-meta'
import axios from 'axios'

Vue.use(VueMeta)

Vue.config.productionTip = false
axios.defaults.baseURL = 'http://www.omdbapi.com/?apikey=c06638fe&page=1&type=movie&Content-Type=application/json'
new Vue({
  vuetify,
  render: h => h(App),
  router
}).$mount('#app')
