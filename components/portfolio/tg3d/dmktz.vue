<template>
  <div>
    <SectionSlider :data="data" :backgrounds="backgrounds" />
  </div>
</template>

<script setup>
import DmktzLargeBg from '@/public/projects/dmktz-lg.png';
import DmktzMediumBg from '@/public/projects/dmktz-md.png';
import DmktzSmallBg from '@/public/projects/dmktz-sm.png';

const props = defineProps({
  data: {
    type: Object,
  },
});

const backgrounds = ref({
  large: DmktzLargeBg,
  medium: DmktzMediumBg,
  small: DmktzSmallBg,
});

const { data } = toRefs(props);
</script>
