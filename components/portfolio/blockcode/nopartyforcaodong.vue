<template>
  <div>
    <SectionSlider :data="data" :backgrounds="backgrounds" />
  </div>
</template>

<script setup>
import NoPartyLargeBg from '@/public/projects/noparty-lg.png';
import NoPartyMediumBg from '@/public/projects/noparty-md.png';
import NoPartySmallBg from '@/public/projects/noparty-sm.png';

const props = defineProps({
  data: {
    type: Object,
  },
});

const backgrounds = ref({
  large: NoPartyLargeBg,
  medium: NoPartyMediumBg,
  small: NoPartySmallBg,
});

const { data } = toRefs(props);
</script>
