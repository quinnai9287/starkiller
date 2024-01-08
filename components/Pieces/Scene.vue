<template>
  <div class="scene" :style="{ backgroundColor }" :class="[`items-${align}`, autoContent ? 'h-auto' : 'h-[100vh]']">
    <div class="absolute w-full h-full left-0 top-0 overflow-hidden">
      <slot name="background"></slot>
    </div>
    <div class="flex flex-col mx-auto w-full max-w-[1180px]">
      <div class="flex flex-col w-full" :style="{ width: `${100 / column}%` }" :class="`items-${contentAlign}`">
        <slot name="top"></slot>
        <slot name="title"></slot>
        <slot name="des"></slot>
        <slot name="button"></slot>
      </div>
      <div>
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  backgroundColor: {
    type: String,
    default: '',
  },
  column: {
    type: Number,
    default: 1,
  },
  align: {
    type: String,
    default: 'center',
  },
  contentAlign: {
    type: String,
    default: 'center',
  },
  autoContent: {
    type: Boolean,
    default: false,
  },
});
</script>

<style scss="lang" scoped>
.scene {
  @apply w-full flex justify-center relative py-12;
}
</style>
