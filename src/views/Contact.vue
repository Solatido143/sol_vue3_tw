<script>
import emailjs from '@emailjs/browser';

export default {
	name: "Contact",
	data() {
		return {
			formData: {
				name: "",
				email: "",
				message: "",
			},
			successMessage: "",
			errorMessage: "",
		};
	},
	methods: {
		async handleSubmit(event) {
			event.preventDefault();

			// Basic form validation
			if (!this.formData.name || !this.formData.email || !this.formData.message) {
				this.errorMessage = "All fields are required.";
				return;
			}

			try {
				const templateParams = { // Define template parameters
					from_name: this.formData.name,
					message: this.formData.message,
					from_email: this.formData.email,
				};

				await emailjs.send(
					"service_c789pic", // Replace with your EmailJS service ID
					"template_tj4dfue", // Replace with your EmailJS template ID
					templateParams,
					"w-7of9uCJC897i8P-" // Replace with your EmailJS user ID
				);

				this.successMessage = "Message sent successfully!";
				this.errorMessage = "";
				this.resetForm();

			} catch (error) {
				console.error("Error submitting the form:", error);
				console.log()
				this.successMessage = "";
				this.errorMessage = "Something went wrong. Please try again later.";
			}
		},
		resetForm() {
			this.formData.name = "";
			this.formData.email = "";
			this.formData.message = "";
		},
	},
};
</script>

<template>
	<section id="contact" class="bg-white py-10 sm:py-16 lg:py-20">
		<div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
			<div class="text-center">
				<h2 class="text-3xl font-extrabold text-neutralDark sm:text-4xl">Contact Me</h2>
				<p class="mt-4 text-lg text-gray-600">Have a question or want to collaborate? Get in touch!</p>
			</div>
			<div class="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
				<!-- Contact Form -->
				<div>
					<form @submit="handleSubmit" class="space-y-6">
						<div class="grid grid-cols-1 gap-6">
							<div>
								<label for="name" class="block text-sm font-medium text-gray-700">Name</label>
								<input
									v-model="formData.name"
									type="text"
									id="name"
									name="name"
									required
									class="mt-1 block w-full rounded-lg border-secondary shadow-sm focus:ring-primary focus:border-primary sm:text-sm" />
							</div>
							<div>
								<label for="email" class="block text-sm font-medium text-gray-700">Email</label>
								<input
									v-model="formData.email"
									type="email"
									id="email"
									name="email"
									required
									class="mt-1 block w-full rounded-lg border-secondary shadow-sm focus:ring-primary focus:border-primary sm:text-sm" />
							</div>
						</div>
						<div>
							<label for="message" class="block text-sm font-medium text-gray-700">Message</label>
							<textarea
								v-model="formData.message"
								id="message"
								name="message"
								rows="4"
								required
								class="mt-1 block w-full rounded-lg border-secondary shadow-sm focus:ring-primary focus:border-primary sm:text-sm"></textarea>
						</div>
						<button
							type="submit"
							class="send-message-button w-full rounded-lg bg-primary px-4 py-2 text-white text-sm font-semibold hover:bg-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
							Send Message
						</button>
					</form>

					<!-- Success and Error Messages -->
					<div v-if="successMessage" class="mt-4 text-sm text-green-500">
						{{ successMessage }}
					</div>
					<div v-if="errorMessage" class="mt-4 text-sm text-red-500">
						{{ errorMessage }}
					</div>
				</div>

				<!-- Image Section -->
				<div class="hidden lg:flex justify-center">
					<img
						src="/src/img/437578654_1111244393479241_8760341249854986468_n.jpg"
						alt="Mark Anthony Sol Cruz"
						class="w-full max-w-md rounded-lg shadow-lg" />
				</div>
			</div>
		</div>
	</section>
</template>

<style scoped>
.send-message-button {
	@apply bg-primary hover:bg-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary;
}
input,
textarea {
	@apply border-secondary shadow-sm focus:ring-primary focus:border-primary;
}
</style>
