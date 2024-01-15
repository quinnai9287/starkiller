<template>
  <div class="tool-bar">
    <el-menu ellipsis class="el-menu-popper-demo h-full px-3 flex items-center" mode="horizontal" :popper-offset="16">
      <div class="text-sm px-2">{{ data.name }}</div>
      <el-divider direction="vertical" />
      <div class="text-sm px-2">{{ data.template }}</div>

      <div class="ml-auto flex items-center">
        <slot name="scale-controller"></slot>
        <el-divider direction="vertical" />
        <div class="mx-4">
          <el-button size="small" :icon="Delete" circle />
          <el-button size="small" :icon="Download" circle />
        </div>
      </div>
    </el-menu>
  </div>
</template>

<script lang="ts" setup>
import { Check, Delete, Download, Edit, Message, Search, Star } from '@element-plus/icons-vue';
defineProps({
  data: {
    type: Object,
    default: () => {},
  },
});
</script>

<style lang="scss" scoped>
.tool-bar {
  @apply flex flex-col h-[40px] fixed top-0 left-[64px] right-0 z-[99];
}
</style>
