<template>
  <div>
    <full-page id="fullpage" ref="fullpage" :options="options">
      <div class="section">
        <SectionScene :label="`FRONTEND`">
          <SceneLanding />
        </SectionScene>
      </div>
      <div class="section">
        <SectionScene :label="`Author`">
          <SceneAuthor />
        </SectionScene>
        <!-- <SectionScene :label="`Portfolio`">
          <ScenePort />
        </SectionScene> -->
      </div>
    </full-page>
  </div>
</template>

<script setup>
import SceneLanding from '@/components/Scene/Landing.vue';
import SceneAuthor from '@/components/Scene/Author/index.vue';
// import ScenePort from '@/components/Scene/Port.vue';

definePageMeta({
  layout: 'default',
});

const { $listen } = useNuxtApp();
const fullpage = ref(null);

$listen('page:slider', (anchor) => {
  console.log('A user was registered!', anchor);
  fullpage.value?.api.moveTo(anchor, 0);
});

const options = ref({
  licenseKey: 'YOUR_KEY_HEERE',
  menu: '#menu',
});
</script>
