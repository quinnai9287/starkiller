<template>
  <div class="flex flex-row mb-6 gap-6 mx-auto max-w-[80%] items-center">
    <div v-for="plan in plans" class="basis-2/3" data-aos="fade-up">
      <PricingCard :data="plan" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import PricingCard from '@/components/Pieces/Common/PricingCard.vue';

const plans = reactive([
  {
    title: 'BASIC',
    price: '9.99',
    des: 'Free 30 days trial',
    features: ['Pieces Basic Editor', '20 Print out files', 'Templates 20+'],

    active: false,
  },
  {
    title: 'FREE',
    price: '0',
    des: 'Totally Free',
    features: ['Pieces Basic Editor', '10 Print out files', 'Templates 10+'],
    active: true,
  },
  {
    title: 'PRO',
    price: '19.99',
    des: 'Available for a month',
    features: ['Pieces Advanced Editor', 'Unlimited Print out files', 'Unlimited Templates'],
    active: false,
  },
]);
</script>
