<template>
  <main>
    <Navigator id="menu" :navigator="navigator" />
    <CanvasAsh />
    <CanvasSphere />
    <slot />
  </main>
</template>

<script setup>
const navigator = ref([
  {
    type: 'page',
    label: '^_^',
    path: '/',
    labelTxt: 'FRONTEND',
    activeTxt: 'ST/FND.',
  },
  // {
  //   type: 'page',
  //   label: 'blog',
  //   path: '/blog',
  //   labelTxt: 'BLOG',
  //   activeTxt: 'BLOG',
  // },
  {
    type: 'page',
    label: 'portfolio',
    path: '/portfolio',
    labelTxt: 'portfolio',
    activeTxt: 'PORTFOLIO',
  },
]);
</script>
