<template>
  <div class="card" :class="{ active: data.active }">
    <h5 class="card-title text-4xl text-center font-bold">{{ data.title }}</h5>
    <p class="card-text">${{ data.price }}/ month per user</p>
    <div class="flex justify-center my-4">{{ data.des }}</div>
    <ul class="list">
      <li v-for="feature in data.features" :key="feature">{{ feature }}</li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  data: {
    type: Object,
    default: () => ({}),
  },
});
</script>

<style lang="scss" scoped>
.card {
  @apply p-8 flex flex-col rounded-sm items-center justify-between min-h-[400px];
  border: 2px solid #ddd;

  &.active {
    @apply min-h-[450px];
    border-color: #009a9f;
  }
}

.card-title {
  color: #009a9f;
}

ul {
  list-style: disc;
  padding-left: 1.5em;

  > li {
    @apply mb-4;
  }
}
</style>
