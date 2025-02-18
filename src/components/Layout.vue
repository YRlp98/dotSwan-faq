<script setup>
import Navbar from "./Navbar.vue";
import Footer from "./Footer.vue";
</script>

<template>
	<div class="flex flex-col min-h-screen">
		<Navbar />

		<transition name="fade" mode="out-in" class="max-w-screen-lg mx-auto px-4 py-8 ">
			<router-view :key="$route.fullPath" />
		</transition>

		<Footer />
	</div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
	opacity: 0;
}
</style>
