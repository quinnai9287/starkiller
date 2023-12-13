<template>
  <div>
    <SectionSlider :data="data" :backgrounds="backgrounds" />
  </div>
</template>

<script setup>
import FitzonLargeBg from '@/public/projects/fitzon-lg.png';
import FitzonMediumBg from '@/public/projects/fitzon-md.png';
import FitzonSmallBg from '@/public/projects/fitzon-sm.png';

const props = defineProps({
  data: {
    type: Object,
  },
});

const backgrounds = ref({
  large: FitzonLargeBg,
  medium: FitzonMediumBg,
  small: FitzonSmallBg,
});

const { data } = toRefs(props);
</script>
