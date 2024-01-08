<template>
  <section>
    <PiecesHeader />
    <slot />
    <PiecesFooter />
  </section>
</template>

<style lang="scss" scoped>
section {
  @apply flex flex-col;
  background-color: #fff;
  min-height: 100vh;
  background-image: url('/groovepaper.png');
}
</style>
