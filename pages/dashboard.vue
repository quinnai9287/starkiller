<template>
  <div class="page-dashboard w-full h-full">
    <div class="max-w-[1180px] min-h-full mx-auto flex flex-col justify-center">
      <div class="files-container">
        <FileCard />
      </div>
      <strong>Recent Files</strong>
      <div class="files-container">
        <FileCard v-for="(file, idx) in files" :key="idx" :data="file" @click="openFile(file.id)" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { usePcsProjectsStore } from '@/stores/usePcsProjects.js';
import FileCard from '@/components/Pieces/Common/FileCard.vue';

definePageMeta({
  layout: 'lab',
});

const router = useRouter();
const projectsStore = usePcsProjectsStore();
const files = projectsStore.allProjects;

const openFile = (id: string) => {
  router.push(`/files/${id}`);
};
</script>

<style lang="scss" scoped>
.page-dashboard {
  background-color: rgba(0, 0, 0, 0.05);
}

.files-container {
  @apply flex flex-wrap gap-8 py-4 mb-4;
}
</style>
