<template>
  <div>
    <SectionSlider :data="data" :backgrounds="backgrounds" />
  </div>
</template>

<script setup>
import CloudzetLargeBg from '@/public/projects/cloudzet-lg.gif';
import CloudzetMediumBg from '@/public/projects/cloudzet-md.gif';
import CloudzetSmallBg from '@/public/projects/cloudzet-sm.gif';

const props = defineProps({
  data: {
    type: Object,
  },
});

const backgrounds = ref({
  large: CloudzetLargeBg,
  medium: CloudzetMediumBg,
  small: CloudzetSmallBg,
});

const { data } = toRefs(props);
</script>
