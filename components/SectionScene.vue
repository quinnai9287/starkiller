<template>
  <div class="section-content" :class="{ parallax }" :style="{ backgroundImage: `url(${bg})`, height: dynamicHeight }">
    <slot />
    <div class="section-label" :data-text="props.label">
      <div class="section-label-text" :data-text="props.label">
        {{ props.label }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import useResize from '@/composables/useResize';

const props = defineProps<{
  label: string;
  bg?: string;
  parallax?: boolean;
}>();

const { dynamicHeight } = useResize();
</script>

<style lang="scss">
.section-content {
  width: 100vw;
  height: 100dvh;
  // background-color: #111;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  z-index: 2;
  background-repeat: no-repeat;
  background-size: cover;
  transition: background-position 0.5s linear;

  &.parallax {
    background-position: center 40%;
  }

  .active & {
    background-position: center 50% !important;
  }
}

@media screen and (min-width: 1024px) {
  .section-content {
    background-size: 100% auto;
  }
}

.section-label {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 10px;
  overflow: visible;
  font-weight: 600;
  line-height: 1;
  width: 200px;
  color: transparent;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  user-select: none;
  text-transform: uppercase;
}

.section-label-text {
  position: absolute;
  top: 95%;
  left: 0px;
  bottom: 0;
  right: 0;
  font-size: 150px;
  font-weight: 600;
  transform: rotate(-90deg);
  transform-origin: top left;
  line-height: 1;
  color: #fff;
  height: auto;
  height: 200px;
  width: 100vh;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  opacity: 0.5;
  z-index: 1;

  &::before {
    content: attr(data-text);
    position: absolute;
    height: 100%;
    display: block;
    overflow: visible;
    color: #5ebbb3;
    top: 20.5%;
    z-index: -1;
    opacity: 0.5;
  }

  &::after {
    content: attr(data-text);
    position: absolute;
    right: 0;
    color: #c76bff;
    display: block;
    overflow: hidden;
    bottom: -4%;
    display: flex;
    align-items: flex-end;
    opacity: 0.5;
    z-index: -1;
  }
}

@media screen and (max-width: 992px) {
  .section-label {
    width: 200px;
    opacity: 0.5;
    transform: scale(0.9);
    transform-origin: top right;
    right: -25px;
  }

  .section-label-text {
    font-size: 75px;

    &::before {
      top: 58.5%;
    }

    &::after {
      content: attr(data-text);
      position: absolute;
      right: 0;
      color: #c76bff;
      display: block;
      overflow: hidden;
      bottom: -4%;
      display: flex;
      align-items: flex-end;
      opacity: 0.5;
      z-index: -1;
    }
  }
}
</style>
