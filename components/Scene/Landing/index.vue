<template>
  <div class="landing-container">
    <h1 class="massive-title">
      <div ref="massiveTitle" class="massive-title-text-clip">Hey!,</div>
      <span>Shall we tailor <br />something interesting?</span>
    </h1>
    <nuxt-link class="main-button shiney-btn" to="/portfolio">
      Checkout Portfolio <el-icon class="icon"><Right /></el-icon>
    </nuxt-link>
  </div>
</template>

<script setup>
// const { $gsap } = useNuxtApp();

const massiveTitle = ref(null);
const mouseX = ref(0);
const mouseY = ref(0);
const traX = ref(0);
const traY = ref(0);

const handleMouseMove = (e) => {
  mouseX.value = e.pageX;
  mouseY.value = e.pageY;
  traX.value = (4 * mouseX.value) / 570 + 40;
  traY.value = (4 * mouseY.value) / 570 + 50;
  massiveTitle.value.style.backgroundPosition = `${traX.value}% ${traY.value}%`;
};

onMounted(() => {
  // document.addEventListener('mousemove', handleMouseMove);
  //   $gsap.to('.classname', {
  //     scrollTrigger: {
  //       trigger: '.classname',
  //       start: 'top 200px',
  //       end: '100%',
  //       // pin: true,
  //       scrub: true,
  //       reverse: true,
  //       markers: false,
  //     },
  //     backgroundColor: '#000',
  //     duration: 300,
  //   });
});
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
