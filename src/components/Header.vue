<script>
import Navbar from './Navbar.vue' ;
  export default {
    components: {
      Navbar
    },
    props: ['title']
  }
</script>

<template>
  <header>
    <h1>{{ title }}</h1>
  </header>
</template>

<style scoped>
  header {
    background-color: blue;
    padding: 20px;
    text-align: center;
  }
</style>