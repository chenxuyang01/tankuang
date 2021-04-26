import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import dataV from '@jiaminghi/data-view';
import ElementUI from 'element-ui'
import '../theme/index.css'
import axios from 'axios'
import Qs from 'qs'
import VueAxios from 'vue-axios'
Vue.prototype.$axios = axios
// import BaiduMap from 'vue-baidu-map'
// import 'element-ui/lib/theme-chalk/index.css'
Vue.use(dataV);

Vue.use(ElementUI);
/*Vue.use(BaiduMap,{
  ak:"m49denrBefRs9GOcNKTUlAq5evfhnaCU"
});*/

// 按需引入vue-awesome图标
import Icon from 'vue-awesome/components/Icon';
import 'vue-awesome/icons/chart-bar.js';
import 'vue-awesome/icons/chart-area.js';
import 'vue-awesome/icons/chart-pie.js';
import 'vue-awesome/icons/chart-line.js';
import 'vue-awesome/icons/align-left.js';
import VueResource from 'vue-resource'
Vue.use(VueResource)
// 全局注册图标
Vue.component('icon', Icon);

import VueTianditu from "vue-tianditu";
Vue.use(VueTianditu, {
  v: "4.0",
  tk: "8a2df64eaa9ff3582718090feacf0a09"
});
// 适配flex
import '@/common/flexible.js';

// 引入全局css
import './assets/scss/style.scss';


//引入echart
import echarts from 'echarts'
Vue.prototype.$echarts = echarts

//引入世界地图
import '../src/common/world/index.js'

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
