import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import Toast from "vue-toastification";
import "bootstrap/dist/css/bootstrap.min.css";
import "vue-toastification/dist/index.css";

const app = createApp(App);
app.use(router);
app.use(createPinia());
app.use(Toast);
app.mount("#app");