import { createApp } from 'vue'
import App from './vue/App.vue'
import router from './vue/router'
import store from './vue/store'

import './vue/assets/js/bootstrap.min.js'
import './vue/assets/css/index.css'
import './vue/assets/css/bootstrap.min.css'

createApp(App)
    .use(router)
    .use(store)
    .mount('#app')