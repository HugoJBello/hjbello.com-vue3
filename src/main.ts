import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import VueI18nPlugin from "@intlify/unplugin-vue-i18n/vite";
import i18n from './i18n';
import "bootstrap/dist/css/bootstrap.min.css"
import 'highlight.js/styles/monokai.css';
import "bootstrap";


createApp(App).use(store).use(router)
.use(i18n).mount('#app')


import "bootstrap/dist/js/bootstrap.js"