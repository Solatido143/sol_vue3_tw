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
