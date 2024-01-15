<template>
  <div>
    <SizeInput v-model:size="measurements.size" v-model:aux="measurements.aux" />
  </div>
</template>

<script lang="ts" setup>
import SizeInput from '@/components/drawlab/SizeInput.vue';
defineProps({
  measurements: {
    type: Object,
    default: () => ({
      size: {
        'B(胸圍)': 82,
        'BL(背長)': 37,
        'S(袖長)': 54,
      },
      aux: {
        鬆份: 5,
      },
    }),
  },
});
</script>
