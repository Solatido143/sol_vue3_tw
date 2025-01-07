<script>
export default {
	name: "Skills",
};
</script>

<template>
	<section id="skills" class="bg-gray-50 py-10 sm:py-16 lg:py-20">
		<div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
			<div class="text-center">
				<h2 class="text-3xl font-extrabold text-neutralDark sm:text-4xl">Skills</h2>
				<p class="mt-4 text-lg text-gray-600">A showcase of the technologies and tools I'm proficient in.</p>
			</div>
			<div class="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
				<div class="flex flex-col items-center justify-center rounded-lg bg-white p-6 shadow-md">
					<i class="fab fa-js text-yellow-500 text-4xl mb-4"></i>
					<span class="text-xl font-semibold text-gray-800">JavaScript</span>
				</div>
				<div class="flex flex-col items-center justify-center rounded-lg bg-white p-6 shadow-md">
					<i class="fab fa-laravel text-blue-600 text-4xl mb-4"></i>
					<span class="text-xl font-semibold text-gray-800">Laravel</span>
				</div>
				<div class="flex flex-col items-center justify-center rounded-lg bg-white p-6 shadow-md">
					<i class="fab fa-vuejs text-green-500 text-4xl mb-4"></i>
					<span class="text-xl font-semibold text-gray-800">Vue.js</span>
				</div>
				<div class="flex flex-col items-center justify-center rounded-lg bg-white p-6 shadow-md">
					<i class="fas fa-paint-brush text-teal-400 text-4xl mb-4"></i>
					<span class="text-xl font-semibold text-gray-800">Tailwind CSS</span>
				</div>
				<div class="flex flex-col items-center justify-center rounded-lg bg-white p-6 shadow-md">
					<i class="fab fa-php text-purple-700 text-4xl mb-4"></i>
					<span class="text-xl font-semibold text-gray-800">PHP</span>
				</div>
				<div class="flex flex-col items-center justify-center rounded-lg bg-white p-6 shadow-md">
					<i class="fas fa-database text-orange-500 text-4xl mb-4"></i>
					<span class="text-xl font-semibold text-gray-800">MySQL</span>
				</div>
			</div>
		</div>
	</section>
</template>

