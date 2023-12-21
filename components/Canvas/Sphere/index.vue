<template>
  <div class="sphere-container" :style="{ height: dynamicHeight }">
    <div id="canvas" ref="canvasRef" />
  </div>
</template>

<script setup>
import useSphere from './useSphere';
import useResize from '@/composables/useResize';

const { dynamicHeight } = useResize();
const canvasRef = ref(null);
useSphere(canvasRef);
</script>

<style lang="scss" scoped>
.sphere-container {
  height: 100dvh;
  min-height: 700px;
  width: 100vw;
  position: fixed;
  top: 0;
  height: 100dvh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
