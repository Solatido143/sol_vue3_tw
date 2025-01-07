<template>
	<footer class="bg-neutralDark py-2 sm:py-8">
		<div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
			<div class="flex flex-col items-center justify-between sm:flex-row">
				<p class="text-sm text-neutralLight">&copy; 2025 Mark Anthony N. Sol Cruz. All rights reserved.</p>
				<ul class="mt-4 flex items-center space-x-4 sm:mt-0">
					<li>
						<a :href="github" target="_blank" class="text-secondary hover:text-primary">
							<i class="fab fa-github text-lg"></i>
						</a>
					</li>
					<li>
						<a :href="linkedin" target="_blank" class="text-secondary hover:text-primary">
							<i class="fab fa-linkedin text-lg"></i>
						</a>
					</li>
					<li>
						<a :href="x_twitter" target="_blank" class="text-secondary hover:text-primary">
							<i class="fab fa-x-twitter text-lg"></i>
						</a>
					</li>
				</ul>
			</div>
		</div>
	</footer>
</template>

<script>
export default {
	data() {
		return {
			github: 'https://github.com/Solatido143',
			linkedin: 'https://www.linkedin.com/in/mark-anthony-sol-cruz-2128052ab/',
			x_twitter: 'https://x.com/PrimaryRhyme143',
		};
	},
};
</script>
