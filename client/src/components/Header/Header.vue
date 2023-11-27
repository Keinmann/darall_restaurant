<script setup lang="ts"></script>

<template>
	<div class="header_containter">
		<div class="header_logo_box">
			<router-link to="/" class="header_logo_box__option">
				<img src="/vite.svg" alt="LOGO" />
				<h1>Esthetic</h1>
			</router-link>
		</div>
		<div class="header_menu">
			<router-link to="/menu" class="header_menu__option">Menu</router-link>
			<router-link to="/about" class="header_menu__option">About</router-link>
		</div>
	</div>
</template>

<style scoped>
@import "./Header.style.scss";
</style>
