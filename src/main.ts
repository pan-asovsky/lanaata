import { createApp } from 'vue'
// @ts-ignore
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import router from "./router";
import {createPinia} from "pinia";

const pinia = createPinia();

createApp(App)
    .use(router)
    .use(pinia)
    .mount('#app')