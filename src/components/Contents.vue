<script setup>
</script>

<template>
  <div class="min-h-screen bg-gray-200"><!--  min-h-screen -->
    <div class="min-h-96 diamond bg-red-500">
      <!-- Your content here -->
    </div>
  </div>
</template>

<style scoped>
  .diamond {
    position: relative;
  }
  .diamond:before {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;

    background-color: rgb(229 231 235 / var(--tw-bg-opacity));
    transform: translate(50%, 50%) rotate(-20deg);
    //border-top: 80px solid rgb(229 231 235 / var(--tw-bg-opacity));
    //border-right: 80px solid rgb(229 231 235 / var(--tw-bg-opacity));
    width: 100%;
    height: 10rem;
  }
  .diamond:after {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;

    background-color: rgb(229 231 235 / var(--tw-bg-opacity));
    transform: translate(-50%, 50%) rotate(20deg);
    //border-top: 80px solid rgb(229 231 235 / var(--tw-bg-opacity));
    //border-right: 80px solid rgb(229 231 235 / var(--tw-bg-opacity));
    width: 100%;
    height: 75%;
  }
</style>
