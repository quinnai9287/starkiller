<template>
  <full-page id="fullpage" ref="fullpage" :options="options">
    <div class="section"><SectionScene>First section ...</SectionScene></div>
    <div class="section"><SectionScene>Second section ...</SectionScene></div>
  </full-page>
</template>

<script setup>
definePageMeta({
  layout: 'default',
});
</script>
