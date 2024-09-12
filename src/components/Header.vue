<script>
import Navbar from './Navbar.vue' ;
  export default {
    components: {
      Navbar
    }
  }
</script>

<template>
  <header>
    <div class="container mx-auto bg-dark px-5 hidden lg:block">
      <div class="flex justify-between">
        <div class="flex items-center space-x-4">
          <small><i class="fa fa-phone-alt mr-2"></i>+63 921 240 7455</small>
          <small><i class="fa fa-envelope-open mr-2"></i>solcruzmarkanthony@gmail.com</small>
        </div>
        <div class="flex items-center space-x-2">
          <a class="p-2 bg-white rounded-full" href="#"><i class="fab fa-twitter"></i></a>
          <a class="p-2 bg-white rounded-full" href="#"><i class="fab fa-facebook-f"></i></a>
          <a class="p-2 bg-white rounded-full" href="#"><i class="fab fa-linkedin-in"></i></a>
          <a class="p-2 bg-white rounded-full" href="#"><i class="fab fa-instagram"></i></a>
          <a class="p-2 bg-white rounded-full" href="#"><i class="fab fa-youtube"></i></a>
        </div>
      </div>
    </div>

    <Navbar/>
  </header>
</template>

<style scoped>

</style>