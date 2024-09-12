<template>
  <Header/>

  <div class="p-6 bg-gray-200 min-h-screen">
<!--    <p class="text-lg mb-4">{{ description }}</p>-->
<!--    <input-->
<!--        type="text"-->
<!--        v-model="title"-->
<!--        placeholder="Change title"-->
<!--        class="border border-gray-300 rounded p-2 mb-4 w-full"-->
<!--    />-->
<!--    <button @click="resetTitle" class="bg-blue-500 text-white py-2 px-4 rounded mb-6 hover:bg-blue-700">-->
<!--      Reset Title-->
<!--    </button>-->
<!--    <ul class="space-y-4">-->
<!--      <li-->
<!--          v-for="project in projects"-->
<!--          :key="project.name"-->
<!--          class="p-4 border border-gray-300 rounded bg-white shadow-md"-->
<!--      >-->
<!--        <h2 class="text-xl font-bold">{{ project.name }}</h2>-->
<!--        <p class="text-gray-600">{{ project.description }}</p>-->
<!--      </li>-->
<!--    </ul>-->

  </div>
</template>

<script>
import Header from './components/Header.vue';

export default {
  components: {
    Header
  },
  data() {
    // return {
    //   title: '',
    //   description: 'This is a Vue.js powered portfolio.',
    //   projects: [
    //     { name: 'Project One', description: 'This is my first project.' },
    //     { name: 'Project Two', description: 'This is my second project.' },
    //     { name: 'Project Three', description: 'This is my third project.' }
    //   ]
    // };
  },
  methods: {
    // resetTitle() {
    //   this.title = '';
    // }
  }
};
</script>

<style scoped></style>
