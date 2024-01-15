import type { Right } from '@element-plus/icons-vue/dist/types';
<template>
  <aside class="side-bar">
    <div class="header">{{ activePanel.name }}</div>
    <div class="p-2">
      <slot></slot>
    </div>
  </aside>
</template>

<script lang="ts" setup>
defineProps({
  activePanel: {
    type: Object,
    default: () => ({}),
  },
});
</script>

<style lang="scss" scoped>
.side-bar {
  @apply rounded-lg shadow-lg w-[250px];
  background: #fff;
  position: fixed;
  right: 20px;
  top: 60px;
  z-index: 99;
  overflow: hidden;
  border: 1px var(--el-border-color) var(--el-border-style);
}

.toggler {
  @apply flex flex-col justify-center items-center;
  transition: all 0.2s ease-in;
  transform: rotate(180deg);
  font-size: 20px;

  &.is-collapse {
    transform: rotate(0deg);
  }
}

.el-menu-vertical-demo {
}

:deep(.el-menu-vertical-demo:not(.el-menu--collapse)) {
  width: 10vw;
  height: 80%;
}

.header {
  @apply text-sm text-center font-bold py-2;
  color: #009a9f;
  border-bottom: 1px var(--el-border-color) var(--el-border-style);
}
</style>
