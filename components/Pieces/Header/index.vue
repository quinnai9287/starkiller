import type { tr } from 'element-plus/es/locale';
<template>
  <header class="w-full p-8">
    <div>
      <PiecesLogo class="w-[50px]" />
    </div>
    <div class="flex-grow"></div>
  </header>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const activeIndex = ref('1');
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
</script>

<style>
header {
  position: fixed;
  top: 0;
  z-index: 99;
  img {
    user-select: none;
  }
}
.flex-grow {
  flex-grow: 1;
}
</style>
