<template>
    <header data-aos="fade-down" class="flex justify-between items-center relative">
      <img src="~assets/images/logo.png">
      <button class="flex flex-col md:hidden">
        <span class="h-1 w-8 bg-gray-900 mb-1 rounded-3xl"></span>
        <span class="h-1 w-8 bg-gray-900 mb-1 rounded-3xl"></span>
        <span class="h-1 w-8 bg-gray-900 mb-1 rounded-3xl"></span>
      </button>
      <ul class="hidden md:block flex flex-col md:flex-row items-center">
        <li>
          <nuxt-link to="/" class="px-4 text-gray-500">Home</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/home" class="px-4 text-gray-500">Beverages</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/home" class="px-4 text-gray-500">Chef</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/home" class="px-4 text-gray-500">Ingredient</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/home" class="px-4 text-gray-500">Stages</nuxt-link>
        </li>
        <li class="px-4 text-center">
          <nuxt-link to="/login" class="ml-8 block btn-custom btn-login">
            My Kitchen
          </nuxt-link>
        </li>
      </ul>
    </header>
</template>

<script>
    export default {
        
    }
</script>

<style>
.nuxt-link-active {
  @apply font-semibold text-gray-900;
}
</style>