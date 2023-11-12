<template>
  <div class="skils-wrap">
    <h3 class="font-bold mb-4">SKILLS</h3>
    <el-tag v-for="item in items" :key="item.label" class="mx-1" :type="item.type" effect="plain">
      {{ item.label }}
    </el-tag>
  </div>
</template>

<script lang="ts" setup>
import type { TagProps } from 'element-plus';

type Item = { type: TagProps['type']; label: string };

const items = ref<Array<Item>>([
  { type: 'warning', label: 'Javascript/CSS/HTML5' },
  { type: 'success', label: 'Vue.js' },
  { type: 'success', label: 'Nuxt.js' },
  { type: 'success', label: 'Typescript' },
  { type: '', label: 'Tailwind CSS' },
  { type: '', label: 'Photoshop' },
  { type: 'warning', label: 'Illustrator' },
]);
</script>

<style lang="scss" scoped>
.skils-wrap {
  @apply mt-10 max-w-[400px];
  ::v-deep .el-tag--plain {
    @apply mb-2;
    --el-tag-bg-color: transparent;
  }
}
</style>
