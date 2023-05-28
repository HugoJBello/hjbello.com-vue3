import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import { createPinia } from "pinia";
import i18n from './i18n';
import "bootstrap/dist/css/bootstrap.min.css"
import 'highlight.js/styles/monokai.css';
import "bootstrap";


const app = createApp(App)
app.use(createPinia())
app.use(i18n)
app.use(router)
app.mount('#app')

import "bootstrap/dist/js/bootstrap.js"