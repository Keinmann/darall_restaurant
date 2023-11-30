import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
//route components
import Menu from "./components/Menu/Menu.vue";
import Order from "./components/Order/Order.vue";

const routes: Array<RouteRecordRaw> = [
	{
		path: "/",
		alias: "/menu",
		name: "Menu",
		component: Menu,
	},
	{
		path: "/order",
		name: "Order",
		component: Order,
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
