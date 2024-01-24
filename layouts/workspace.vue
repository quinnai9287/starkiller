<template>
  <div class="workspace-layout">
    <div class="w-full h-full dashbord-layout ml-[64px] pt-[40px] relative">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import Dock from '@/components/drawlab/Dock.vue';
import ToolBar from '@/components/drawlab/ToolBar.vue';
</script>

<style lang="scss" scoped>
.workspace-layout {
  @apply flex w-fit h-fit min-h-[100vh] min-w-full;
  background-color: #fff;
  background-image: url('/groovepaper.png');
}
</style>
