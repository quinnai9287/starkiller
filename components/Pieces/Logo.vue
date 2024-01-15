<template>
  <div>
    <svg xmlns="http://www.w3.org/2000/svg" :width="width" viewBox="0 0 202.27 151.58">
      <g>
        <polygon :fill="white ? `#fff` : `#009a9f`" points="41.24 41.24 41.24 0 0 41.24 41.24 41.24" />
        <polygon fill="#81cdcd" points="43.72 0 43.72 108.77 98.11 54.39 43.72 0" />
        <polygon fill="#81cdcd" points="87.17 151.58 195.95 151.58 141.56 97.19 87.17 151.58" />
        <polygon
          :fill="white ? `#fff` : `#009a9f`"
          points="163.13 71.5 202.27 32.36 124 32.36 84.86 71.5 45.72 110.64 84.86 149.77 124 110.64 163.13 71.5"
        />
      </g>
    </svg>
    <div
      v-if="showText"
      class="text-sm mt-1 tracking-widest font-Podkova font-bold"
      :style="{ color: white ? '#fff' : '#000' }"
    >
      PIECES
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  white: {
    type: Boolean,
    default: false,
  },
  width: {
    type: Number,
    default: 50,
  },
  showText: {
    type: Boolean,
    default: true,
  },
});
</script>
