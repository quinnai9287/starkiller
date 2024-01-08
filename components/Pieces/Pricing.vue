<template>
  <div class="flex flex-row mb-6 gap-6 mx-auto max-w-[80%] items-center">
    <div v-for="plan in plans" class="basis-2/3">
      <PricingCard :data="plan" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import PricingCard from '@/components/Pieces/Common/PricingCard.vue';

const plans = reactive([
  {
    title: 'Basic',
    price: '9.99',
    des: 'Free 30 days trial',
    features: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    ],

    active: false,
  },
  {
    title: 'Free',
    price: '0',
    des: 'Totally Free',
    features: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    ],
    active: true,
  },
  {
    title: 'Pro',
    price: '19.99',
    des: 'Available for a month',
    features: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    ],
    active: false,
  },
]);
</script>
