<template>
  <div class="sphere-container">
    <div id="canvas" ref="canvasRef" />
  </div>
</template>

<script setup>
import useSphere from './useSphere';
const canvasRef = ref(null);
useSphere(canvasRef);
</script>

<style lang="scss" scoped>
.sphere-container {
  height: 100vh;
  min-height: 700px;
  width: 100vw;
  position: fixed;
  top: 0;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
