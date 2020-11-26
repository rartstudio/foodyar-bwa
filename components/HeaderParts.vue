<template>
    <header :class="[ToggleMenu ? 'pt-4': '',' flex justify-between items-center relative']">
      <div :class="[ToggleMenu ? 'fixed z-50 -mx-4 px-4 pt-18' : '', 'flex justify-between w-full md:w-3/12 items-center']">
        <img src="~assets/images/logo.png" class="z-50">
        <div class="flex md:hidden">
                <button @click="setToggleMenu(ToggleMenu)"
                    :class="['toggle z-50', ToggleMenu ? 'active' : '']"
                    >
                </button>
            </div>
      </div>
      <ul :class="['fixed inset-0 bg-gray-100 md:bg-transparent md:relative md:opacity-100 md:visible pt-24 md:pt-0 transition-colors duration-300  overflow-hidden md:flex flex-col md:flex-row items-center', ToggleMenu ? 'opacity-100 visible z-40' : 'opacity-0 invisible']">
        <li class="my-4 md:my-0">
          <nuxt-link to="/" class="px-4 text-lg text-gray-500">Home</nuxt-link>
        </li>
        <li class="my-4 md:my-0">
          <nuxt-link to="/home" class="px-4 text-lg text-gray-500">Beverages</nuxt-link>
        </li>
        <li class="my-4 md:my-0">
          <nuxt-link to="/home" class="px-4 text-lg text-gray-500">Chef</nuxt-link>
        </li>
        <li class="my-4 md:my-0">
          <nuxt-link to="/home" class="px-4 text-lg text-gray-500">Ingredient</nuxt-link>
        </li>
        <li class="my-4 md:my-0">
          <nuxt-link to="/home" class="px-4 text-lg text-gray-500">Stages</nuxt-link>
        </li>
        <li class="my-8 md:my-0 px-4 md:text-center">
          <nuxt-link to="/login" class="md:ml-8 md:block text-lg btn-custom btn-login">
            My Kitchen
          </nuxt-link>
        </li>
      </ul>
    </header>
</template>

<script>
     export default {
        data() {
          return {
            ToggleMenu: false
          }
        },
        methods: {
            setToggleMenu(toggle){
                return this.ToggleMenu = !toggle
            }
        },
    }
</script>

<style>
.nuxt-link-active {
  @apply font-semibold text-gray-900;
}

.toggle {
    position: relative;
    width: 20px;
    height: 20px;
    z-index: 9999;
}
.toggle:focus {
    outline: none
}
.toggle:before,
.toggle:after{
    @apply right-0 absolute bg-gray-900 transition-all duration-200;
    content: "";
    height:3px;
    transform-origin:center;
}
.toggle:before{
    top:26%;
    width: 20px;
}
.toggle:after{
    top: 58%;
    width: 12px;
}
.toggle.active:before{
    transform: translateY(-50%) rotate(-45deg);
}
.toggle.active:after{
    transform: translateY(-50%) rotate(45deg);
}
.toggle.active:before, .toggle.active:after {
    width: 20px;
    top: 50%;
}
</style>