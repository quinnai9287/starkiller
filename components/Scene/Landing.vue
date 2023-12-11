<template>
  <div>
    <h1 class="massive-title">
      <div ref="massiveTitle" class="massive-title-text-clip">Hey!,</div>
      <span>Shall we tailor <br />something interesting?</span>
    </h1>
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
.classname {
  height: 100px;
}

.massive-title {
  margin: 0;
  font-size: 80px;
  position: relative;
  transform: translateY(-15%);
  text-align: left;
  line-height: 0.75;
  letter-spacing: -4px;
  font-weight: bold;
  color: #ccc;
}

.massive-title-text-clip {
  color: transparent;
  font-size: 150px;
  background: url('https://phandroid.s3.amazonaws.com/wp-content/uploads/2014/05/rainbow-nebula.jpg') repeat;
  background-position: 40% 50%;
  -webkit-background-clip: text;
  font-family: 'Podkova', san-serif;
  line-height: 1;
  position: relative;
  margin-bottom: 4rem;
  transform: translateY(25%);
}
</style>
