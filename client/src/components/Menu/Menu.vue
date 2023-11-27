<script setup lang="ts">
const menuItem = {
	title: "пельмешки",
	weight: 500,
	description:
		"вкусные пельмешки. со сметанкой. лучший выбор на любой случай жизни",
};
const menuData = [menuItem, menuItem, menuItem, menuItem, menuItem];
</script>

<template>
	<div class="menu_containter">
		<ul>
			<li v-for="(item, id) in menuData" v-bind:key="id">
				<div>{{ item.title }}</div>
				<div>{{ item.weight }}</div>
				<div>{{ item.description }}</div>
			</li>
		</ul>
	</div>
</template>

<style scoped>
@import "./Menu.style.scss";
</style>
