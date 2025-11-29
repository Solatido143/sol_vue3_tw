<script>
export default {
	name: "About",
};
</script>

<template>
	<section id="about" class="bg-gray-50 py-16">
		<div class="max-w-4xl mx-auto px-6 sm:px-12 lg:px-16">
			<div class="bg-white rounded-lg shadow-lg p-8">
				<div class="flex flex-col md:flex-row items-center">
					<img src="../img/SOL CRUZ MARK ANTHONY1027.jpg" alt="Profile Picture"
						class="w-32 h-32 rounded-full md:mx-0 md:mr-8" />
					<div>
						<h2 class="text-2xl font-bold text-gray-800">About Me</h2>
						<p class="mt-4 text-gray-600 leading-relaxed">
							Hello! I'm <strong>Mark Anthony N. Sol Cruz</strong>, a passionate software developer
							specializing in web
							development. I enjoy creating elegant, user-friendly applications using modern technologies
							like
							<span class="font-medium text-secondary">Yii 2, Laravel, Vue.js, and Tailwind CSS</span>.
						</p>
						<p class="mt-4 text-gray-600 leading-relaxed">
							I graduated with a <strong>Bachelor of Science in Information Technology</strong> from
							Bulacan State
							University, where I was a <strong class="text-secondary">Dean's Lister</strong> for the
							academic years
							2022-2023 and 2023-2024. My dedication to learning and problem-solving has always been my
							greatest
							strength.
						</p>
						<button type="button" href="#" class="inline-flex items-center mt-6 text-secondary hover:underline font-semibold">
							View my resume
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
								stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
								class="lucide lucide-arrow-right-icon lucide-arrow-right ml-2 w-4 h-4">
								<path d="M5 12h14" />
								<path d="m12 5 7 7-7 7" />
							</svg>
						</button>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>
