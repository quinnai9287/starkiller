<template>
  <div class="skils-wrap">
    <h3 class="font-bold mb-4">SKILLS</h3>
    <div class="tags-container">
      <span v-for="item in items" :key="item.label" class="tag">
        {{ item.label }}
      </span>
    </div>
    <!-- <el-tag v-for="item in items" :key="item.label" class="mx-1" :type="item.type" effect="plain">
      {{ item.label }}
    </el-tag> -->
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
  { type: '', label: 'React.js' },
  { type: '', label: 'React-Native' },
  { type: '', label: 'Tailwind CSS' },
  { type: 'warning', label: 'Three.js' },
  { type: 'warning', label: 'Git' },
  { type: '', label: 'Photoshop' },
  { type: 'warning', label: 'Illustrator' },
]);
</script>

<style lang="scss" scoped>
.skils-wrap {
  @apply mt-5 lg:mt-10 max-w-[400px];
  :deep(.el-tag--plain) {
    @apply mb-2;
    --el-tag-bg-color: transparent;
  }
}

.tags-container {
  @apply flex flex-wrap;
  gap: 0.5rem;
}

.tag {
  @apply p-1 text-xs;
  display: inline-block;
  color: cyan;
  // color: #5ebbb3;
  border-radius: 3px;
  border-color: currentColor;
  border-width: 1px;
  border-style: solid;
  zoom: 0.8;

  @screen md {
    zoom: 1;
  }
}
</style>
