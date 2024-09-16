<script setup>
</script>

<template>
  <div class="min-h-screen bg-white">
    <div class="bg-gray-300">
      <!-- Your content here -->
      <div class="flex flex-col md:flex-row justify-center items-center h-full">
        <div class="px-5 lg:w-5/12 sm:w-6/12">
          <div class="mt-5 title-intro">
            <h1 class="text-4xl font-bold text-black name inline-block">Mark Anthony Sol Cruz</h1>
            <p class="text-gray-600">
              Software Developer
            </p>
<!--            <button class="bg-white text-black border-2 inline-flex items-center mt-4 px-6 py-2 rounded-md hover:bg-gray-100">-->
<!--              <span class="mr-1">Learn More</span>-->
<!--              <span class="fa-solid fa-angles-right"></span>-->
<!--            </button>-->
          </div>
        </div>
        <div class="p-5 lg:w-5/12 sm:w-6/12">
          <div class="grid gap-4">
            <div>
              <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/featured/image.jpg" alt="">
            </div>
            <div class="grid grid-cols-5 gap-4">
              <div>
                <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg" alt="">
              </div>
              <div>
                <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg" alt="">
              </div>
              <div>
                <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg" alt="">
              </div>
              <div>
                <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg" alt="">
              </div>
              <div>
                <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg" alt="">
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
    <div class="bg-gray-100">
      <div class="p-5">
        <div class="flex justify-center items-center">
          <div class="w-full p-4 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
            <h5 class="mb-2 text-3xl font-bold text-gray-900 dark:text-white">Projects</h5>
            <p class="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">List of all projects that i've done in my lifetime.</p>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div>
                <a href="#" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                  <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="../img/75341273_1431013807047573_5959803062104096768_n.jpg" alt="">
                  <div class="flex flex-col justify-between p-4 leading-normal">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Ka-bario</h5>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Lorem ipsum odor amet, consectetuer adipiscing elit. Malesuada proin placerat class enim viverra vivamus parturient inceptos placerat.</p>
                  </div>
                </a>
              </div>
              <div>
                <a href="#" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                  <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="../img/75341273_1431013807047573_5959803062104096768_n.jpg" alt="">
                  <div class="flex flex-col justify-between p-4 leading-normal">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Nailandia</h5>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Lorem ipsum odor amet, consectetuer adipiscing elit. Malesuada proin placerat class enim viverra vivamus parturient inceptos placerat.</p>
                  </div>
                </a>
              </div>
              <div>
                <a href="#" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                  <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="../img/75341273_1431013807047573_5959803062104096768_n.jpg" alt="">
                  <div class="flex flex-col justify-between p-4 leading-normal">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Lorem ipsum</h5>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Lorem ipsum odor amet, consectetuer adipiscing elit. Malesuada proin placerat class enim viverra vivamus parturient inceptos placerat.</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .title-intro .name {
    font-size: 32px;
    font-weight: 700;
    letter-spacing: 1px;
    text-transform: uppercase;
    position: relative;
  }
  .title-intro .name::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    border-bottom: 3px solid red;
    width: 10rem;
  }
  .title-intro .name::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    border-bottom: 3px solid red;
    width: 10rem;
  }

  @media (min-width: 768px) {
    .title-intro .name::after {
      width: 0;
    }
  }



</style>
