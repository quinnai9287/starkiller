<template>
  <div class="w-full h-full">
    <PiecesMannequin class="mannequin" />
    <PiecesMannequin solid class="mannequin-solid" />
  </div>
</template>

<style lang="scss" scoped>
.mannequin {
  @apply absolute;
  left: 57%;
  transform: translate(-50%, 30%);
}

.mannequin-solid {
  @apply absolute;
  left: 69.5%;
  transform: translate(-50%, 13%);
}
</style>
