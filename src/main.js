import { createApp } from "vue";

import axios from "axios";
import VueAxios from "vue-axios";
import "bootstrap";
import Loading from "vue-loading-overlay"; //component
import "vue-loading-overlay/dist/vue-loading.css"; //style

import App from "./App.vue";
import router from "./router";

const app = createApp(App);
app.component("loading", Loading);
app.use(VueAxios, axios, Loading);
app.use(router);
app.mount("#app");
