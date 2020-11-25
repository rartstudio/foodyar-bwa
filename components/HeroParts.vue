<template>
    <section id="hero" class="flex items-center mt-20 mb-32">
        <div class="w-full flex flex-col items-center md:block md:w-5/12" data-aos="slide-right" data-aos-duration='500'>
          <h1 class="text-4xl font-semibold text-gray-900" data-aos="flip-down">
            Eat What You Cook <br/> With Us, Together !
          </h1>
          <p class="text-center md:text-left text-gray-500 mt-4" data-aos="flip-down">
            When you eat something that cooked by
            yourself, <br class="hidden md:block"/>the happiness is priceless.
          </p>
          <nuxt-link to="/login" class="mt-8 inline-block btn-custom btn-cta">
            Decided a Menu
          </nuxt-link>
        </div>
        <div class="hidden md:block md:w-2/12"></div>
        <div class="hidden md:block md:w-5/12" data-aos="slide-left" data-aos-duration='1500'>
          <div class="relative">
            <div class="absolute inset-0 hero-media hero-rectangle-2"></div>
            <div class="absolute inset-0 hero-media hero-rectangle-1"></div>
            <img src="~/assets/images/image 2.png" class="hero-media block"/>
            <img src="~/assets/images/btn.png" alt="" class="absolute z-10 btn-play">
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