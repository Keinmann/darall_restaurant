//dependencies
import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./components/App/App.vue";

//route components
import Home from "./components/Home/Home.vue";
import Menu from "./components/Menu/Menu.vue";
import About from "./components/About/About.vue";
//styles
import "./style.css";

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: "/",
			name: "Home",
			component: Home,
		},
		{
			path: "/about",
			name: "About",
			component: About,
		},
		{
			path: "/menu",
			name: "Menu",
			component: Menu,
		},
	],
});

// App.use(router);

createApp(App).use(router).mount("#app");
