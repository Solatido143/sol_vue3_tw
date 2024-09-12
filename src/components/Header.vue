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
    <Navbar/>
  </header> 
</template>

<style scoped>
  header {
    background-color: blue;
    text-align: center;
  }
</style>