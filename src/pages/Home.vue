<template>
	<div class="flex flex-col justify-center items-center h-screen text-center">
		<h1 class="text-5xl font-extrabold mb-4">Hello, dear visitor! 👋🙂</h1>
		<p class="text-xl mb-6 max-w-2xl mx-auto">
			Welcome to the home page of this small project.
			<br />
			Click the button below to see the FAQ page.
		</p>
		<router-link
			to="/faq"
			class="bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg hover:bg-blue-800 transition-all"
		>
			Go to FAQ Page
		</router-link>
	</div>
</template>

<style scoped></style>
