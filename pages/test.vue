<template>
  <div class="w-full h-full relative">
    <Dock :data="dockData" @open="openSidePanel" />
    <div class="p-10">
      <TestComp2 />
    </div>
    <ol>
      <li>間格等距離繪畫</li>
    </ol>
  </div>
</template>

<script setup>
import Dock from '@/components/drawlab/Dock.vue';
definePageMeta({
  layout: 'workspace',
});
</script>
<style lang="scss" scoped>
.emoji-container {
  width: 500px;
  border: 1px solid #000;
  height: 500px;
  background-color: #fff;
}
</style>
