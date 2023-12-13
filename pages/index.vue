<template>
  <div>
    <full-page id="fullpage" ref="fullpage" class="full-page" :options="options">
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
      <div class="section">
        <SectionScene :label="`Author`">
          <SceneIntros />
        </SectionScene>
      </div>
      <div class="section">
        <SectionScene :bg="FashionBg" :parallax="true">
          <SceneSideProject />
        </SectionScene>
      </div>
    </full-page>
  </div>
</template>

<script setup>
import SceneLanding from '@/components/Scene/Landing.vue';
import SceneSideProject from '@/components/Scene/SideProject/index.vue';
import SceneAuthor from '@/components/Scene/Author/index.vue';

import FashionBg from '@/public/fashion.jpg';
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
  anchors: ['^_^', 'author', 'aboutme', 'aprilbabygirl'],
});
</script>

<style lang="scss" scoped>
.arrow-left,
.arrow-right {
  border: 1px solid #5ebbb3;
  border-radius: 50%;
}
</style>
