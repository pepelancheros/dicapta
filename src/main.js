import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import VueScrollTo from "vue-scrollto";
import ClickOutsideDirective from "./utils/ClickOutsideDirective";

const app = createApp(App);

app.directive("click-outside", ClickOutsideDirective);
app.use(router);
app.use(VueScrollTo);

app.mount("#app");
