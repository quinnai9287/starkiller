<template>
  <div>
    <div
      class="draw-lab"
      ref="canvasContainer"
      style="width: 100%; height: 100%; cursor: default"
      @mousedown="handleMouseDown"
      @mousemove="(e) => handleMouseMove(e, drawCanvas)"
      @mouseup="handleMouseUp"
      tabindex="0"
    >
      <canvas ref="canvas" width="1920" height="1080" @wheel="(e) => handleZoom(e, drawCanvas)"></canvas>
      <SketchRule
        :thick="sketchRuleData.thick"
        :scale="sketchRuleData.scale"
        :width="582"
        :height="482"
        :startX="sketchRuleData.startX"
        :startY="sketchRuleData.startY"
        :shadow="sketchRuleData.shadow"
        :lines="sketchRuleData.lines"
      />
    </div>
    <ScaleController
      :zoom="zoom"
      @zoom-in="handleClickZoom('in', drawCanvas)"
      @zoom-out="handleClickZoom('out', drawCanvas)"
    />
  </div>
</template>
<script setup>
import 'vue3-sketch-ruler/lib/style.css';
import ScaleController from './components/ScaleController.vue';
import useBoard from './useBoard';

const props = defineProps({
  data: {
    type: Object,
    default: () => ({
      size: {
        'B(胸圍)': 82,
        'BL(背長)': 37,
        'S(袖長)': 54,
      },
      aux: {
        鬆份: 5,
      },
    }),
  },
});

const canvasContainer = (ref < HTMLElement) | (null > null);
const canvas = (ref < HTMLCanvasElement) | (null > null);
const {
  zoom,
  drawCanvas,
  handleZoom,
  handleClickZoom,
  handleMouseDown,
  handleMouseMove,
  handleMouseUp,
  SketchRule,
  sketchRuleData,
} = useBoard(canvasContainer, canvas, props.data);

watch(
  () => props.data,
  () => {
    drawCanvas();
  },
  { deep: true },
);
</script>
<style lang="scss" scoped>
.draw-lab {
  width: 100%;
  height: 100%;
  background-color: #fff;
}

.scale-controller-container {
  @apply m-5;
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 1;
  background-color: #fff;
  border-radius: 2px;

  .scale-text {
    @apply flex justify-center items-center;
    width: 50px;
  }
}
</style>
