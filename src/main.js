import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
//import '@/assets/styles/style.scss';
import router from '@/router';
//import { VuetifyPreset } from 'vuetify/types/services/presets'
// import store from '@/store';
//import sassStyles from '@/assets/styles/style.scss'

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
