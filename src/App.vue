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

  </div>
</template>

<script>
import Header from './components/Header.vue';

export default {
  components: {
    Header
  },
  data() {
    // some data
  },
  methods: {
    // resetTitle() {
    //   this.title = '';
    // }
  }
};
</script>

<style scoped></style>
