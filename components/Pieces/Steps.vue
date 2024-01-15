<template>
  <div class="mx-auto w-9/12">
    <div v-for="step in steps" :key="step.title" class="step-block flex gap-4" data-aos="fade-up">
      <div class="basis-1/2">
        <el-image
          :src="`
          https://placehold.co/400x300`"
        >
          <template #error>
            <div class="image-slot">
              <el-icon><icon-picture /></el-icon>
            </div>
          </template>
        </el-image>
      </div>
      <div class="basis-1/2 flex flex-col justify-center">
        <h2 class="mt-1 mb-6 font-Podkova text-4xl font-bold">{{ step.title }}</h2>
        <p>{{ step.des }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const steps = reactive([
  {
    title: 'Input measurements',
    des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.',
  },
  {
    title: 'Edit in Pieces',
    des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.',
  },
  {
    title: 'Print out and join pieces!',
    des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.',
  },
  {
    title: 'Bravoo! Start crafting with fabric!',
    des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.',
  },
]);
</script>
<style lang="scss" scoped>
.step-block {
  @apply mb-12;
  flex-direction: row;
  &:nth-child(even) {
    flex-direction: row-reverse;
  }
}
</style>
