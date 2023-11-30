<script setup lang="ts"></script>

<template>
	<div class="header_containter">
		<div class="header_logo_box">
			<router-link to="/" class="header_logo_box__option-beautified">
				Esthetic
			</router-link>
		</div>
		<div class="header_menu">
			<router-link to="/menu" class="header_menu__option">Menu</router-link>
			<router-link to="/order" class="header_menu__option">Order</router-link>
		</div>
	</div>
</template>

<style scoped>
@import "./Header.style.scss";
</style>
