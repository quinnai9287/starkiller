<template>
  <div class="device-box">
    <figure
      class="desktop"
      :style="{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), #000), url(${backgrounds?.large})`,
      }"
    ></figure>
    <figure
      class="iphone"
      :style="{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), #000), url(${backgrounds?.small})`,
      }"
    ></figure>
    <figure
      class="ipad"
      :style="{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), #000), url(${backgrounds?.medium})`,
      }"
    ></figure>
  </div>
</template>

<script setup>
const props = defineProps({
  backgrounds: {
    type: Object,
    default: () => ({
      large: '',
      medium: '',
      small: '',
    }),
  },
});

const { backgrounds } = toRefs(props);
</script>

<style lang="scss" scoped>
.device-box {
  @apply flex justify-center items-center relative w-[100vw] h-[100vh];
  transform: scale(0.95);
  opacity: 0.6;
}

.iphone,
.ipad,
.desktop {
  display: block;
  background-repeat: no-repeat, no-repeat;
  border: solid #080808;
  box-shadow: inset 0 0 0 1px #111;
  margin-bottom: 2em;
  position: absolute;
  transition:
    all 0.1s linear,
    line-height 0s linear;
  background-position:
    50% 100%,
    center;
  transform-origin: bottom center;
  color: transparent;
  transition:
    all 0.15s linear,
    line-height 5s linear;
  // box-shadow: 0 0.5em 3em 0.25em rgba(0, 0, 0, 0.33), 0 0 0 1px #000 inset;
  // transform: scale(1.0025);
  line-height: 0vmin;
  background-position: center top;
  background-size: 100% 100%;
}

.iphone {
  $unit: 40vmin/2.525;
  width: $unit;
  height: 2 * $unit;
  line-height: 2.165 * $unit;
  border-width: $unit/20;
  border-radius: $unit/5.86;
  background-image: linear-gradient(rgba(0, 0, 0, 0), #111),
    url(https://www.apple.com/v/iphone-xs/d/images/overview/screen_display_wallpaper_iphonexs_large.jpg);
  z-index: 200;
}

.ipad,
.desktop {
  margin-left: 2em;
  background-image: linear-gradient(rgba(0, 0, 0, 0), #111),
    url(https://www.apple.com/v/ipad-pro/s/images/overview/retina_screen_1__csuokryyjb42_large.jpg);
  z-index: 100;
}

.desktop {
  $unit: 70vmin;
  width: 1.43 * $unit;
  height: $unit;
  line-height: 1.43 * $unit;
  left: 55%;
  border-width: $unit/20;
  border-radius: $unit/14;
  transform: translate(-50%, -5%);
}

.iphone {
  transform: translate(-50%, 77%);
  left: 45%;
}

.ipad {
  $unit: 30vmin;
  line-height: 1.43 * $unit;
  height: 1.43 * $unit;
  width: $unit;
  border-width: $unit/20;
  border-radius: $unit/14;
  left: 58%;
  transform: translate(-50%, 44%);
}
</style>
