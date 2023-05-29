import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import { createPinia } from "pinia";
import i18n from './i18n';
import Markdown from 'vue3-markdown-it';
import { VueCookieNext } from 'vue-cookie-next';
import VueGtag from 'vue-gtag';

import "bootstrap/dist/css/bootstrap.min.css"
import 'highlight.js/styles/monokai.css';


const app = createApp(App)
app.use(createPinia())
app.use(i18n)
app.use(router)
app.use(Markdown)
app.use(VueCookieNext)
app.use(VueGtag, {
    config: { id: 'G-CZ26BQ61HL' },enabled:true
  });
app.mount('#app')

import "bootstrap/dist/js/bootstrap.js"