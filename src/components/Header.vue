<script>
import Navbar from './Navbar.vue' ;
  export default {
    components: {
      Navbar
    },
    data() {
      return {
        title : 'M.A.S.C',
        phone_num: '+63 921 240 7455',
        email: 'solcruzmarkanthony@gmail.com',
        links: [
          { name: 'facebook', url: 'https://www.facebook.com/CobolRinkashime' },
          { name: 'github', url: 'https://github.com/Solatido143' },
          { name: 'linkedin', url: 'https://www.linkedin.com/in/mark-anthony-sol-cruz-2128052ab/' }
        ]
      }
    }
  }
</script>

<template>
  <header>
    <div class="container mx-auto bg-dark px-5 hidden md:block mt-2">
      <div class="flex justify-between">
        <div class="flex items-center space-x-4">
          <p><i class="fa fa-phone-alt mr-2"></i>{{ phone_num }}</p>
          <p><i class="fa fa-envelope-open mr-2"></i>{{ email }}</p>
        </div>
        <div class="flex items-center space-x-2">
          <a
          v-for="link in links"
          :key="link.name"
          :href="link.url"
          target="_blank"
          class="bg-gray-300 hover:bg-gray-100 hover:border-grey-100 hover:border-2 rounded-full"
          >
            <i :class="'fab fa-' + link.name"></i>
          </a>
        </div>
      </div>
    </div>

    <Navbar :title="title"/>
  </header>
</template>

<style scoped>
  header a {
    width: 30px;
    height: 30px;
    position: relative;
  }
  header a i {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
</style>