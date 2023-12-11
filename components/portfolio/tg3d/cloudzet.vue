<template>
  <div>
    <SectionSlider :data="data">
      <div class="slide">678910</div>
    </SectionSlider>
  </div>
</template>

<script setup>
const props = defineProps({
  data: {
    type: Object,
  },
});
const { data } = toRefs(props);
</script>
