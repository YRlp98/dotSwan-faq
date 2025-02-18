<script setup lang="ts">
import { useRoute } from "vue-router";

const route = useRoute();

const getActiveClass = (path) => {
	return route.path === path ? "font-bold text-blue-500" : "";
};
</script>

<template>
	<nav class="bg-white p-4">
		<div class="flex justify-between items-center max-w-screen-lg mx-auto">
			<router-link to="/" class="text-xl font-semibold">
				<img src="/images/logo.svg" alt="Logo" class="h-8 mr-2" />
			</router-link>
			<div class="space-x-4 text-gray-600">
				<router-link to="/home" class="hover:text-black" :class="getActiveClass('/')">Home</router-link>
				<router-link to="/faq" class="hover:text-black" :class="getActiveClass('/faq')">FAQ</router-link>
				<router-link to="/about" class="hover:text-black" :class="getActiveClass('/about')">About</router-link>
			</div>
		</div>
	</nav>
</template>
