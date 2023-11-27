<script setup lang="ts">
import Header from "../Header/Header.vue";
</script>

<template>
	<div class="app_container">
		<Header />
		<router-view></router-view>
	</div>
</template>

<style scoped>
@import "./App.style.scss";
</style>
