<template>
  <div>
    <Sidebar>
      <template #title> Japanese Culture Style Prototype 文化式女裝原型 </template>
      <template #controller>
        <SizeInput v-model:size="data.size" v-model:aux="data.aux" />
      </template>
    </Sidebar>
    <DrawlabBoard ref="drawlabBoardRef" :data="data" />
  </div>
</template>

<script setup>
import Sidebar from '@/components/drawlab/Sidebar.vue';
import SizeInput from '@/components/drawlab/SizeInput.vue';

definePageMeta({
  layout: 'lab',
});

const drawlabBoardRef = ref(null);

const data = reactive({
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
