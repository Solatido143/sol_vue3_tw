<script>
import {ref, set, push} from "firebase/database";
import {database} from "@/firebase"; // Correct import path

export default {
	name: "Contact",
	data() {
		return {
			name: "",
			email: "",
			message: "",
		};
	},
	methods: {
		async submitForm(event) {
			event.preventDefault();

			try {
				// Get a reference to the "messages" node
				const messagesRef = ref(database, "messages");
				const newMessageRef = push(messagesRef);

				// Save the form data to Firebase
				await set(newMessageRef, {
					name: this.name,
					email: this.email,
					message: this.message,
					timestamp: new Date().toISOString(),
				});

				alert("Thank you for contacting me! Your message has been sent.");
				// Reset the form fields
				this.name = "";
				this.email = "";
				this.message = "";
			} catch (error) {
				console.error("Error submitting the form:", error);
				alert("An error occurred while sending your message. Please try again later.");
			}
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
					<form @submit="submitForm" class="space-y-6">
						<div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
							<div>
								<label for="name" class="block text-sm font-medium text-gray-700">Name</label>
								<input
									type="text"
									id="name"
									v-model="name"
									required
									class="mt-1 block w-full rounded-lg border-secondary shadow-sm focus:ring-primary focus:border-primary sm:text-sm" />
							</div>
							<div>
								<label for="email" class="block text-sm font-medium text-gray-700">Email</label>
								<input
									type="email"
									id="email"
									v-model="email"
									required
									class="mt-1 block w-full rounded-lg border-secondary shadow-sm focus:ring-primary focus:border-primary sm:text-sm" />
							</div>
						</div>
						<div>
							<label for="message" class="block text-sm font-medium text-gray-700">Message</label>
							<textarea
								id="message"
								v-model="message"
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
				</div>
				<!-- Image Section -->
				<div class="hidden lg:flex justify-center">
					<img
						src="../img/437578654_1111244393479241_8760341249854986468_n.jpg"
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
