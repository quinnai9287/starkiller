<template>
  <main>
    <slot />
  </main>
</template>

<script setup lang="ts">
const slotData = ref('Some data to pass');
</script>
