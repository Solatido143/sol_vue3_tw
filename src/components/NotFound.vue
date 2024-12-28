<template>
	<div class="bg-white">
		<div class="flex items-center justify-center h-screen bg-gray-100">
			<div class="text-center">
				<h1 class="text-6xl font-extrabold text-red-500">404</h1>
				<p class="text-xl text-gray-700">Oops! Page not found.</p>
				<router-link to="/" class="mt-4 text-indigo-600 hover:text-indigo-800">Go Back Home</router-link>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "NotFound",
};
</script>

<style scoped></style>
