import type { Right } from '@element-plus/icons-vue/dist/types';
<template>
  <aside class="side-bar">
    <el-menu default-active="2" class="el-menu-vertical-demo" :collapse="isCollapse">
      <div class="toggler-container" :style="{ height: dynamicHeight }" @click="isCollapse = !isCollapse">
        <div class="toggler" :class="{ 'is-collapse': isCollapse }">
          <el-icon><CaretLeft /></el-icon>
        </div>
      </div>
      <div class="sidemenu-container pl-[40px]">
        <div class="title p-5">
          <slot name="title"></slot>
        </div>
        <div class="sidemenu-content p-5">
          <slot name="controller"></slot>
        </div>
      </div>
    </el-menu>
  </aside>
</template>

<script lang="ts" setup>
import useResize from '@/composables/useResize';
const { dynamicHeight } = useResize();
const isCollapse = ref(false);
</script>

<style lang="scss" scoped>
.side-bar {
  position: fixed;
  right: 0;
  top: 0;
}

.toggler-container {
  @apply p-4 cursor-pointer flex flex-col justify-center items-center;
  width: 40px;
  height: 100vh;
  background-color: #333;
  color: #fff;
  transition: background-color 0.2s ease-in;
  position: absolute;
  top: 0;
  left: 0;
  &:hover {
    background-color: #6cdbd2;
  }
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
  background-color: #e5e5e5;
  height: 100dvh;
  width: 40px;
}

:deep(.el-menu-vertical-demo:not(.el-menu--collapse)) {
  width: 30vw;
  height: 100dvh;
}
</style>
