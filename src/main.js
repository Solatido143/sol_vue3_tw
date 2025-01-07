import './assets/main.css'
import 'flowbite';
import 'flowbite/dist/flowbite.css';

import {ref} from "vue";
import {Dialog, DialogPanel} from "@headlessui/vue";
import {Bars3Icon, XMarkIcon} from "@heroicons/vue/24/outline";

import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";

createApp(App).use(router).mount("#app");