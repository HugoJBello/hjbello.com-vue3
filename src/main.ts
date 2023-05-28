import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import { createPinia } from "pinia";
import i18n from './i18n';
import Markdown from 'vue3-markdown-it';

import "bootstrap/dist/css/bootstrap.min.css"
import 'highlight.js/styles/monokai.css';


const app = createApp(App)
app.use(createPinia())
app.use(i18n)
app.use(router)
app.use(Markdown)
app.mount('#app')

import "bootstrap/dist/js/bootstrap.js"