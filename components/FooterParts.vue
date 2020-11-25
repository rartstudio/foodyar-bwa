<template>
    <footer class="flex flex-col px-2 md:px-0">
      <div class="flex flex-col flex-start md:flex-row md:justify-between md:items-center mb-12">
        <div class="w-full mb-8 md:w-3/12">
          <img src="~assets/images/logo.png">
        </div>
        <div class="w-full mb-2 md:w-3/12">
          <h3 class="font-semibold text-xl mb-4">Special Course</h3>
          <ul>
            <li>
              <nuxt-link to="/login" class="mb-1 inline-block text-gray-600 hover:text-gray-900">Wedding Foods</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/login" class="mb-1 inline-block text-gray-600 hover:text-gray-900">Health and Muscle</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/login" class="mb-1 inline-block text-gray-600 hover:text-gray-900">Office Food Daily</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/login" class="mb-1 inline-block text-gray-600 hover:text-gray-900">Happy Kids</nuxt-link>
            </li>
          </ul>
        </div>
        <div class="w-full mb-2 md:w-3/12">
          <h3 class="font-semibold text-xl mb-4">Company</h3>
          <ul>
            <li>
              <nuxt-link to="/login" class="mb-1 inline-block text-gray-600 hover:text-gray-900">APIs Developer</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/login" class="mb-1 inline-block text-gray-600 hover:text-gray-900">Carreer</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/login" class="mb-1 inline-block text-gray-600 hover:text-gray-900">Terms and Conditions</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/login" class="mb-1 inline-block text-gray-600 hover:text-gray-900">Privacy Policy</nuxt-link>
            </li>
          </ul>
        </div>
        <div class="w-full mb-2 md:w-3/12 self-start">
          <h3 class="font-semibold text-xl mb-4">Be Our Friend</h3>
          <p class="text-gray-600">
            3, Season Park, Jakarta <br/>
            support@foodyar.co,id <br>
            021 - 1111 - 2222 <br>
          </p>
        </div>
      </div>
      <hr>
      <div class="py-4">
        <p class="text-center font-sm text-gray-600">
          All Rights Reserved Foodyar by Pixel from BuildWith Angga 2020
        </p>
      </div>
    </footer>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>