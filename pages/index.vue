<template>
  <div class="container mx-auto px-4 pt-8">
    <HeaderParts/>
    <main>
      <HeroParts/>
      <section id="special-to-try" class="px-2 md:px-0">
        <p class="text-gray-600 text-center">Watch Now</p>
        <h1 class="text-center text-3xl font-semibold mt-2">Special to Try</h1>
        <MenuCategories/>
        <MenuItem/>
      </section>
      <ReviewParts/>
      <StatisticParts/>
      <DownloadParts/>
    </main>
    <FooterParts/>
  </div>
</template>

<script>
export default {
}
</script>

<style>
.container {
  font-family: 'Quicksand', sans-serif;
}
.hero-rectangle-1 {
  background: #D8CBF6;
  z-index: -1;
  top: 20px;
  right:-10px;
  bottom: -12px;
}
.hero-rectangle-2 {
  background: #FDFAE5;
  z-index: -1;
  top: -10px;
  left:-10px;
}
.hero-media {
  /* clip-path: polygon(20% 0%, 80% 0%, 100% 20%, 90% 74%, 80% 100%, 20% 100%, 8% 75%, 0% 20%); */
    border-top-left-radius: 70px;
    border-top-right-radius: 70px;
    border-bottom-left-radius: 60px;
    border-bottom-right-radius: 140px;
}

.btn-play {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.btn-cta {
  background: #F7C531;
}
.btn-login {
  background: #FBE0DC;
}
.btn-custom {
  @apply px-6 py-3 rounded-tl-3xl rounded-tr-3xl rounded-bl-xl rounded-br-xl font-semibold;
}
.img-rounded {
  border-top-left-radius: 40px;
  border-top-right-radius: 80px;
  border-bottom-left-radius: 80px;
  border-bottom-right-radius: 80px;
}
.img-style-1 {
  background: #FDFAE5;
  z-index: -1;
  top:-10px;
  left: -10px;
  bottom: -5px;
}
.img-style-2 {
  background: #D8CBF6;
  z-index: -2;
  right: -10px;
  top:-10px;
  left: -20px;
  bottom: -10px;
}
.cook.active {
  color: #F7C531;
  @apply font-semibold;
}
.cook.active:before {
  position:absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 600%);
  content:"";
  height:2px;
  background: #F7C531;
  width:50%;
}
.svg-double-quotes{
  top: -65px;
  left: 170px;
  z-index: -1;
}
.link-wrapped:hover::after {
  @apply absolute inset-0 z-20 transition-all duration-500;
  background: rgba(39,32,66,.6);
  content:'';
  border-top-left-radius: 40px;
  border-top-right-radius: 80px;
  border-bottom-left-radius: 80px;
  border-bottom-right-radius: 80px;
}
.link-wrapped:hover::before {
  @apply absolute z-30 transition-all duration-500;
  content: url('~assets/images/btn.svg');
  top:50%;
  left: 50%;
  transform: translate(-50%,-50%);
}
</style>
