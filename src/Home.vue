<script>
import Hero from "@/views/Hero.vue";
import About from "@/views/About.vue";
import Projects from "@/views/Projects.vue";
import Skills from "@/views/Skills.vue";
import Contact from "@/views/Contact.vue";

export default {
	components: {
		Hero,
		About,
		Projects,
		Skills,
		Contact,
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

<template>
	<div>
		<Hero />
		<About />
		<Projects />
		<Skills />
		<Contact />
	</div>
</template>

<style scoped></style>
