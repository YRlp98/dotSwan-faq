<template>
	<footer class="bg-white py-4 mt-8">
		<div class="container text-gray-600 mx-auto text-center relative group">
			<!-- Emoji with scroll to top and tooltip -->
			<p
				@click="scrollToTop"
				class="text-4xl cursor-pointer relative transform transition-transform duration-300 ease-in-out group-hover:translate-y-2"
			>
				🙃
				<span
					class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-max px-2 py-1 text-sm bg-gray-700 text-white rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"
				>
					Scroll to top
				</span>
			</p>
		</div>
	</footer>
</template>

<script setup>
const scrollToTop = () => {
	window.scrollTo({ top: 0, behavior: "smooth" });
};
</script>
