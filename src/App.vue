<template>
	<div>
		<Navbar />
		<Hero />
		<About />
		<Projects />
		<Skills />
		<Contact />
		<Footer />
	</div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Hero from "./views/Hero.vue";
import About from "./views/About.vue";
import Projects from "./views/Projects.vue";
import Skills from "./views/Skills.vue";
import Contact from "./views/Contact.vue";
import Footer from "./components/Footer.vue";

export default {
	components: {
		Navbar,
		Hero,
		About,
		Projects,
		Skills,
		Contact,
		Footer,
	},
	data() {
		// some data
	},
	methods: {
		// resetTitle() {
		//   this.title = '';
		// }
	},
};
</script>

<style scoped></style>
