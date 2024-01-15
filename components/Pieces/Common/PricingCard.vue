<template>
  <div class="card" :class="{ active: data.active }">
    <h5 class="card-title text-4xl text-center font-Podkova font-bold">{{ data.title }}</h5>
    <p class="card-text text-xs font-bold">${{ data.price }}/ month per user</p>
    <div class="card-des-tag flex justify-center text-xs font-bold mt-4">{{ data.des }}</div>
    <el-divider />
    <ul class="list">
      <li v-for="feature in data.features" :key="feature" class="text-sm font-bold">
        <el-icon class="mr-1"><Select /></el-icon>{{ feature }}
      </li>
    </ul>
    <!-- <el-button disabled>Subscribe</el-button> -->
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
  @apply p-8 flex flex-col items-center justify-center min-h-[400px] relative cursor-pointer;
  border: 2px solid #ddd;
  transition: 0.3s ease-in-out;

  &:hover {
    border-color: #009a9f;
    &::before {
      border: 2px dashed #009a9f;
    }
  }

  &.active {
    @apply min-h-[450px];
    border-color: #009a9f;

    &::before {
      border: 2px dashed #009a9f;
    }
  }

  &::before {
    @apply rounded-lg;
    transition: 0.3s ease-in-out;
    content: '';
    position: absolute;
    top: 10px;
    left: 10px;
    right: 10px;
    bottom: 10px;
    border: 2px dashed #ddd;
    display: block;
  }
}

.card-title {
  color: #009a9f;
}

ul {
  // @apply mb-4;
  > li {
    @apply mb-4 flex items-center;
    color: #616161;
  }
}

.card-des-tag {
  @apply px-4 py-1 rounded-full;
  color: #616161;
  border: 1px solid currentColor;

  .active & {
    background-color: #009a9f;
    color: #fff;
  }
}
</style>
