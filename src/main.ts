import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import "bootstrap/dist/css/bootstrap.min.css"
import 'highlight.js/styles/monokai.css';
import "bootstrap";


createApp(App).use(store).use(router).mount('#app')


import "bootstrap/dist/js/bootstrap.js"