<template>
  <div>
    <DrawlabBoard ref="drawlabBoardRef" :data="data" />
  </div>
</template>

<script setup>
import DrawlabBoard from '@/components/drawlab/Board/index.vue';
const route = useRoute();
definePageMeta({
  layout: 'workspace',
});

const drawlabBoardRef = ref(null);

const data = reactive({
  file: {
    id: route.params.id,
    create_at: '2024-01-11T00:00:00.000Z',
    name: 'My Pieces.pcs',
    template: 'Japanese Culture Style Prototype',
  },
  size: {
    'B(胸圍)': 82,
    'BL(背長)': 37,
    'S(袖長)': 54,
  },
  aux: {
    鬆份: 5,
  },
});
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
