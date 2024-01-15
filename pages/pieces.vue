<template>
  <div>
    <PiecesScene column="2" contentAlign="start">
      <template #top><span class="font-Podkova font-semibold">Hello, Designers!</span></template>
      <template #title>
        <h1 class="mt-1 mb-6 font-Podkova text-6xl font-bold">
          Get your own <br />Clothing Prototype <br />pieces now!
        </h1>
      </template>
      <template #des>
        <p class="mb-6">
          Enter your body measurements, Pieces will assist in creating your personalized clothing prototype pattern!
        </p>
      </template>
      <template #background><PiecesLanding /></template>
      <template #button>
        <button class="main-button shiney-btn mb-6">
          Get Started <el-icon class="icon"><Right /></el-icon>
        </button>
      </template>
    </PiecesScene>
    <PiecesScene :align="`start`" auto-content>
      <PiecesCommonCarousel />
      <div class="flex justify-center my-16">
        <h1 class="mt-1 mb-6 font-Podkova text-5xl font-bold" data-aos="fade-up">HOW WE DO IT</h1>
      </div>
      <PiecesSteps />
    </PiecesScene>
    <PiecesScene :align="`start`" backgroundColor="#d5ebeb" auto-content data-aos="fade-up">
      <template #title>
        <h1 class="mt-1 mb-4 font-Podkova text-5xl font-bold">COMMUNITY</h1>
      </template>
      <template #des><p class="font-semibold">Yes, Designers! we hear you!</p></template>
      <div class="flex gap-4 my-8 justify-center mx-auto max-w-[75%]">
        <div class="basis-1/3" data-aos="fade-up">
          <div class="brick">
            <h3 class="font-bold text-2xl">TEMPLATES</h3>
            Pieces template library!
          </div>
        </div>
        <div class="basis-1/3" data-aos="fade-up">
          <div class="brick">
            <h3 class="font-bold text-2xl">STORE</h3>
            Sale your Pieces online!
          </div>
        </div>
        <div class="basis-1/3" data-aos="fade-up">
          <div class="brick">
            <h3 class="font-bold text-2xl">EVENTS</h3>
            Designers! Let's meet up!
          </div>
        </div>
      </div>
    </PiecesScene>
    <PiecesScene>
      <template #title><h1 class="mt-1 mb-4 font-Podkova text-5xl font-bold" data-aos="fade-up">PRICING</h1></template>
      <template #des><p class="mb-8 font-semibold" data-aos="fade-up">BETA RIGHT NOW ALL FREE</p></template>
      <PiecesPricing />
    </PiecesScene>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'pieces',
});

const { $aos } = useNuxtApp();
onMounted(() => {
  $aos().init({
    mirror: true,
    delay: 500,
    duration: 1000,
  });
});
</script>

<style lang="scss" scoped>
.main-button {
  @apply py-4 px-6 rounded inline-flex items-center justify-center;
  font-size: 18px;
  font-weight: 600;
  border: 1px solid #673ab7;
  cursor: pointer;
  // background-color: #673ab7;
  transition: all 0.3s ease-in-out;
  outline: none;
  position: relative;
  overflow: hidden;
  width: max-content;
  height: 55px;

  .icon {
    @apply ml-1;
    transition: all 0.3s ease-in-out;
  }

  &:hover {
    .icon {
      @apply ml-2;
    }
  }
}

.shiney-btn {
  background: #009a9f;
  color: #fff;
  border: none;
  border-radius: 50px;
  border: 1px solid #009a9f;
  transition: 0.4s;
}

.shiney-btn:before {
  content: '';
  background-color: rgba(255, 255, 255, 0.5);
  height: 100%;
  width: 25px;
  display: block;
  position: absolute;
  top: 0;
  left: -65px;
  transform: skewX(-45deg) translateX(0);
  transition-delay: 0.5s;
  transition: 0.6s;
}

.shiney-btn:hover {
  color: #fff;
  border-color: #fff;
}

.shiney-btn:focus,
.shiney-btn:active {
  // background: #673ab7;
  color: #fff;
}

.shiney-btn:hover:before {
  left: calc(100% + 20px);
}

@media screen and (max-width: 768px) {
  .massive-title-text-clip {
    font-size: 100px;
  }
}

@media screen and (max-width: 480px) {
  .main-button {
    @apply py-2 px-3;
    font-size: 12px;
  }
}

.brick {
  @apply h-[200px] rounded-sm p-4 relative flex flex-col justify-center items-center;
  background-color: #a3a3a3;
  color: white;

  &::before {
    @apply rounded-lg;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    content: '';
    transform: scale(0.93);
    transform-origin: center;
    border: 1px dashed #fff;
    display: block;
  }
}
</style>
