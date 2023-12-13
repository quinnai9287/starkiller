<template>
  <div class="ashes-container">
    <div id="canvas" ref="canvasRef" />
  </div>
</template>

<script setup>
import useDrawAshes from './useAshes';
const canvasRef = ref(null);
useDrawAshes(canvasRef);
</script>

<style lang="scss" scoped>
.ashes-container {
  height: 100vh;
  min-height: 700px;
  width: 100vw;
  position: fixed;
  top: 0;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
}
</style>
