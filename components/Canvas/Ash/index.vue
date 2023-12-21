<template>
  <div class="ashes-container" :style="{ height: dynamicHeight }">
    <div id="canvas" ref="canvasRef" />
  </div>
</template>

<script setup>
import useDrawAshes from './useAshes';
import useResize from '@/composables/useResize';
const { dynamicHeight } = useResize();
const canvasRef = ref(null);
useDrawAshes(canvasRef);
</script>

<style lang="scss" scoped>
.ashes-container {
  height: 100dvh;
  min-height: 700px;
  width: 100vw;
  position: fixed;
  top: 0;
  height: 100dvh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
}
</style>
