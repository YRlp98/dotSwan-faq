<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { useRoute } from "vue-router";

const hasShadow = ref(false);

const handleScroll = () => {
	if (window.scrollY > 0) {
		hasShadow.value = true;
	} else {
		hasShadow.value = false;
	}
};

onMounted(() => {
	window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
	window.removeEventListener("scroll", handleScroll);
});

const route = useRoute();

const getActiveClass = (path: string) => {
	return route.path === path ? "font-bold text-blue-500" : "";
};
</script>

<template>
	<nav :class="['bg-white p-4 w-full fixed top-0 left-0 right-0 z-10', hasShadow ? 'shadow-md' : '']">
		<div class="flex justify-between items-center max-w-screen-lg mx-auto">
			<!-- Left Side: Logo -->
			<router-link to="/" class="text-xl font-semibold">
				<img src="/images/logo.svg" alt="Logo" class="h-8 mr-2" />
			</router-link>

			<!-- Right Side: Pages -->
			<div class="space-x-4 text-gray-600">
				<router-link to="/home" class="hover:text-black" :class="getActiveClass('/')">Home</router-link>
				<router-link to="/faq" class="hover:text-black" :class="getActiveClass('/faq')">FAQ</router-link>
				<router-link to="/about" class="hover:text-black" :class="getActiveClass('/about')">About</router-link>
			</div>
		</div>
	</nav>
</template>
