<template>
  <full-page id="fullpage" ref="fullpage" :options="options">
    <div class="section">
      <SectionScene :label="`DMKTZ`"><DMKTZ /></SectionScene>
    </div>
    <div class="section">
      <SectionScene :label="`FITZON`"><FITZON /></SectionScene>
    </div>
    <div class="section">
      <SectionScene :label="`CLOUDZET`"><CLOUDZET /></SectionScene>
    </div>
  </full-page>
</template>

<script setup>
import DMKTZ from '@/components/portfolio/tg3d/dmktz.vue';
import FITZON from '@/components/portfolio/tg3d/fitzon.vue';
import CLOUDZET from '@/components/portfolio/tg3d/cloudzet.vue';

definePageMeta({
  layout: 'default',
});

const options = ref({
  licenseKey: 'YOUR_KEY_HEERE',
});
</script>
