import Vue from 'vue'
import App from './App.vue'
import router from './router'
import fastClick from 'fastclick'
import store from './store'

// starting with version 2.6.0, you need to manually introduce swiper's css
require('swiper/dist/css/swiper.css')

// import
import VueAwesomeSwiper from 'vue-awesome-swiper'
fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false


new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
