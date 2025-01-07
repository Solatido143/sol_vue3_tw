<template>
	<div class="bg-white">
		<div class="relative isolate min-h-screen flex flex-col justify-center">
			<div
				class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
				aria-hidden="true"
				style="pointer-events: none">
				<div
					class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
					style="
						clip-path: polygon(
							74.1% 44.1%,
							100% 61.6%,
							97.5% 26.9%,
							85.5% 0.1%,
							80.7% 2%,
							72.5% 32.5%,
							60.2% 62.4%,
							52.4% 68.1%,
							47.5% 58.3%,
							45.2% 34.5%,
							27.5% 76.7%,
							0.1% 64.9%,
							17.9% 100%,
							27.6% 76.8%,
							76.1% 97.7%,
							74.1% 44.1%
						);
					" />
			</div>
			<div class="flex items-center justify-center h-screen">
				<div class="text-center">
					<h1 class="text-6xl font-extrabold text-red-500">404</h1>
					<p class="text-xl text-gray-700">Oops! Page not found.</p>
					<router-link to="/" class="mt-4 text-indigo-600 hover:text-indigo-800">Go Back Home</router-link>
				</div>
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
