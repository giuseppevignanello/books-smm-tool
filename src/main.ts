import { createApp } from "vue";
import "./style.scss";
import { router } from "./route.ts";
import App from "./App.vue";
createApp(App).mount("#app");
createApp(App).use(router).mount("#app");
