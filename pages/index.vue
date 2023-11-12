<template>
  <div>
    <Navigator id="menu" :navigator="navigator" :active-section="getActiveSection()" />
    <full-page id="fullpage" ref="fullpage" :options="options">
      <div v-for="scene in navigator" :key="scene.label" class="section">
        <SectionScene :label="scene.labelTxt">
          <component :is="scene.component" />
        </SectionScene>
      </div>
    </full-page>
  </div>
</template>

<script setup>
import SceneLanding from '@/components/Scene/Landing.vue';
import SceneAuthor from '@/components/Scene/Author/index.vue';
import ScenePort from '@/components/Scene/Port.vue';

definePageMeta({
  layout: 'default',
});

const { $listen } = useNuxtApp();
const fullpage = ref(null);

$listen('page:slider', (anchor) => {
  console.log('A user was registered!', anchor);
  fullpage.value?.api.moveTo(anchor, 0);
});

const navigator = ref([
  {
    label: '^_^',
    path: '/',
    labelTxt: 'FRONTEND',
    component: SceneLanding,
  },
  {
    label: 'author',
    path: '/author',
    labelTxt: 'AUTHOR',
    component: SceneAuthor,
  },
  {
    label: 'port',
    path: '/port',
    labelTxt: 'PORT',
    component: ScenePort,
  },
]);

const options = ref({
  licenseKey: 'YOUR_KEY_HEERE',
  menu: '#menu',
  anchors: navigator.value.map((link) => link.label),
  verticalCentered: false,
});

const getActiveSection = () => {
  return fullpage.value?.api.getActiveSection().anchor;
};
</script>
