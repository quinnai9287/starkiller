<template>
  <div class="file" :class="{ 'new-file': !data.id }">
    <template v-if="!data.id">
      <el-icon size="100"><DocumentAdd /></el-icon>
      <span class="font-bold text-sm mt-1">Create New File</span>
    </template>
    <template v-else>
      <div class="file-thumbnail">
        <picture v-if="data.thumbnail"></picture>
      </div>
      <div class="flex grow p-2 text-xs font-bold w-full">
        <div v-if="data.name" class="file-name">{{ data.name }}</div>
        <!-- <div v-if="data.size" class="file-size">{{ data.size }}</div> -->
      </div>
    </template>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  data: {
    type: Object,
    default: () => ({}),
  },
});
</script>

<style scoped lang="scss">
.file {
  @apply w-[200px] h-[200px] flex flex-col rounded-sm justify-center items-center cursor-pointer shadow-lg;
  color: #009a9f;
  background-color: #f7f7f7;
  border: 1.5px solid var(--el-menu-border-color);
  transition: 0.3s ease-in-out;

  &.new-file {
    color: #fff;
    background-color: #009a9f;
  }
  .file-thumbnail {
    height: 75%;
    width: 100%;
    border-bottom: 1.5px solid var(--el-menu-border-color);
  }
}
</style>
