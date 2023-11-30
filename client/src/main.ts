//dependencies
import { createApp } from "vue";
import App from "./components/App/App.vue";
import router from "./router.ts";

//styles
import "./style.css";

createApp(App).use(router).mount("#app");
