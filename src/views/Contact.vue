<script></script>

<template>
	<section class="bg-white py-10 sm:py-16 lg:py-20">
		<div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
			<div class="flex flex-col-reverse sm:flex-row items-center justify-between">
				<!-- Left side: Contact Form -->
				<div class="sm:w-1/2">
					<div class="text-center sm:text-left">
						<h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">Contact Me</h2>
						<p class="mt-4 text-lg text-gray-600">Have a question or want to collaborate? Get in touch!</p>
					</div>
					<form class="mt-8 space-y-6">
						<div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
							<div>
								<label for="name" class="block text-sm font-medium text-gray-700">Name</label>
								<input
									type="text"
									id="name"
									name="name"
									required
									class="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
							</div>
							<div>
								<label for="email" class="block text-sm font-medium text-gray-700">Email</label>
								<input
									type="email"
									id="email"
									name="email"
									required
									class="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
							</div>
						</div>
						<div>
							<label for="message" class="block text-sm font-medium text-gray-700">Message</label>
							<textarea
								id="message"
								name="message"
								rows="4"
								required
								class="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"></textarea>
						</div>
						<button
							type="submit"
							class="w-full rounded-lg bg-indigo-600 px-4 py-2 text-white font-semibold hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
							Send Message
						</button>
					</form>
				</div>

				<!-- Right side: Picture of you -->
				<div class="sm:w-1/2 mb-8 sm:mb-0 hidden sm:flex justify-center">
					<img src="../img/SOL CRUZ MARK ANTHONY1049.jpg" alt="Your Picture" class=" w-72 h-72 object-contain" />
				</div>
			</div>
		</div>
	</section>
</template>
