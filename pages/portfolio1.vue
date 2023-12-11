<template>
  <full-page id="fullpage" ref="fullpage" :options="options">
    <div v-for="(project, i) in projects" :key="project.key" class="section">
      <SectionScene :label="project.key">
        {{ project.key }}
        <!-- <component :data="project" :is="getComponent(project.key)" /> -->
      </SectionScene>
    </div>
  </full-page>
</template>

<script setup>
import ScenePortSlide from '@/components/Scene/PortSlide.vue';
import { useCounterStore } from '~/stores/counter.js';

import DMKTZ from '@/components/portfolio/tg3d/dmktz.vue';
import FITZON from '@/components/portfolio/tg3d/fitzon.vue';
import CLOUDZET from '@/components/portfolio/tg3d/cloudzet.vue';

definePageMeta({
  layout: 'default',
});

const counterStore = useCounterStore();
const projects = counterStore.projects;

const options = ref({
  licenseKey: 'YOUR_KEY_HEERE',
});

const getComponent = (key) => {
  let component = null;

  switch (key) {
    case 'dmktz':
      component = DMKTZ;
      break;
    case 'fitzon':
      component = FITZON;
      break;
    case 'cloudzet':
      component = CLOUDZET;
      break;
    default:
      component = null;
      break;
  }

  return component;
};
</script>
