<template>
  <full-page id="fullpage" ref="fullpage" :options="options">
    <div class="section">First section ...</div>
    <div class="section">Second section ...</div>
  </full-page>
</template>

<script setup>
const options = ref({
  licenseKey: 'YOUR_KEY_HEERE',
  menu: '#menu',
  anchors: ['page1', 'page2', 'page3'],
  sectionsColor: ['#41b883', '#ff5f45', '#0798ec'],
});
</script>
