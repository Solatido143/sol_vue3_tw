<template>
  <Header/>

  <Contents/>
</template>

<script>
import Header from './components/Header.vue';
import Contents from "./components/Contents.vue";

export default {
  components: {
    Contents,
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

<style scoped>

</style>
