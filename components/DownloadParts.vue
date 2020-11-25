<template>
    <section id="download" class="flex items-center mt-10 px-2 md:px-0 md:mt-20 mb-16 md:mb-32">
        <div class="hidden md:block md:w-5/12 " data-aos="flip-left">
          <div class="relative ml-48">
            <div class="absolute inset-0 hero-media hero-rectangle-2"></div>
            <div class="absolute inset-0 hero-media hero-rectangle-1"></div>
            <img src="~/assets/images/image 8.png" class="hero-media block"/>
          </div>
        </div>
        <div class="hidden md:block md:w-1/12"></div>
        <div class="w-full md:w-5/12">
          <h1 class="text-2xl text-center md:text-4xl md:text-left font-semibold text-gray-900" data-aos="slide-down">
            Download our app <br class="hidden md:block"/>and join the contest
          </h1>
          <p class="text-base text-center md:text-left text-gray-500 mt-4" data-aos="slide-down">
            In order to improve our cooking skills, <br/>
            we do need a food photography 
          </p>
          <div data-aos="slide-down" class="flex items-center justify-between md:justify-start">
            <nuxt-link to="/login" class="mt-8 mr-2 inline-block">
              <img src="~/assets/images/appstore.png">
            </nuxt-link>
            <nuxt-link to="/login" class="mt-8 ml-2 inline-block">
              <img src="~/assets/images/googleplay.png">
            </nuxt-link>
          </div>
        </div>
      </section>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>