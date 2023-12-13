<template>
  <div class="tag-box">
    <div class="tag" v-for="tag in tags" :key="tag">
      {{ tag }}
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  tags: {
    type: Array,
  },
});

const { tags } = toRefs(props);
</script>

<style lang="scss" scoped>
.tag-box {
  @apply flex flex-wrap mt-auto;
  max-width: 350px;

  .tag {
    @apply mr-2 text-xs px-2 py-1 mb-2;
    border: 1px solid white;
  }
}

@media screen and (max-width: 480px) {
  .tag {
    zoom: 0.8;
  }
}
</style>
