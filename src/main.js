// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// 播放视频配置
require('video.js/dist/video-js.css');
require('vue-video-player/src/custom-theme.css');
import VideoPlayer from 'vue-video-player'

Vue.use(VideoPlayer);

// axios配置
import axios from "axios";

Vue.prototype.$axios = axios;

//element-ui
import Element from "element-ui"
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(Element);

import "../static/css/global.css"

// 导入极验
import "../static/js/gt"

Vue.config.productionTip = false
import store from './store/index'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
