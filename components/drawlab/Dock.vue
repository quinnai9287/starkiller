<template>
  <aside class="dock">
    <el-menu default-active="2" class="el-menu-vertical-demo h-full" :collapse="isCollapse">
      <div class="flex flex-col justify-center h-[55px] items-center" index="2">
        <PiecesLogo :width="30" :show-text="false" />
      </div>
      <div class="flex flex-col justify-center h-[55px] items-center p-4" index="2">
        <el-divider />
      </div>
      <el-menu-item v-for="(item, idx) in data" :key="item.id" :index="idx" @click="handleOpen(item.key)">
        <el-icon><component :is="getElIcon(item.icon)" /></el-icon>
        <template #title>{{ item.name }}</template>
      </el-menu-item>
      <div class="flex flex-col justify-center h-[55px] items-center p-4" index="2">
        <el-divider />
      </div>
      <el-menu-item index="5">
        <el-icon><Setting /></el-icon>
        <template #title>Navigator Four</template>
      </el-menu-item>
    </el-menu>
  </aside>
</template>

<script lang="ts" setup>
import { Document, EditPen, SetUp, Printer, Setting } from '@element-plus/icons-vue';

defineProps({
  data: {
    type: Object,
    default: () => ({}),
  },
});

const emit = defineEmits(['open', 'close']);

const isCollapse = ref(true);

const getElIcon = (key: string) => {
  switch (key) {
    case 'Document':
      return Document;
    case 'EditPen':
      return EditPen;
    case 'SetUp':
      return SetUp;
    case 'Printer':
      return Printer;
    default:
      return Document;
  }
};

const handleOpen = (key: string) => {
  console.log(key);
  emit('open', key);
};
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
</script>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}

.dock {
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  z-index: 99;
}
</style>
