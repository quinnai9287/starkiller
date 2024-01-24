<template>
  <div>
    <DrawlabBoard ref="drawlabBoardRef" :data="fetchedData" />
  </div>
</template>

<script setup>
import { usePcsProjectsStore } from '@/stores/usePcsProjects.js';
import DrawlabBoard from '@/components/drawlab/Board/index.vue';
const route = useRoute();
definePageMeta({
  layout: 'workspace',
});
const store = usePcsProjectsStore();
await store.fetchDataById({ id: route.params.id });
const fetchedData = computed(() => {
  return store.getFetchedData;
});

const drawlabBoardRef = ref(null);
</script>
<style lang="scss" scoped>
.draw-lab {
  width: 100%;
  height: 100%;
  background-color: #fff;
}

.scale-controller-container {
  @apply m-5;
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 1;
  background-color: #fff;
  border-radius: 2px;

  .scale-text {
    @apply flex justify-center items-center;
    width: 50px;
  }
}
</style>
