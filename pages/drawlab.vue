<template>
  <div>
    <Sidebar>
      <template #title> Japanese Culture Style Prototype 文化式女裝原型 </template>
      <template #controller>
        <SizeInput v-model:size="size" v-model:aux="aux" @refresh="drawCanvas" />
      </template>
    </Sidebar>
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
    </div>
    <div class="scale-controller-container">
      <el-row>
        <el-button @click="handleClickZoom('out', drawCanvas)">
          <el-icon><ZoomOut /></el-icon>
        </el-button>
        <div class="scale-text">{{ (zoom.scale * 100).toFixed() }}%</div>
        <el-button @click="handleClickZoom('in', drawCanvas)">
          <el-icon><ZoomIn /></el-icon>
        </el-button>
      </el-row>
    </div>
  </div>
</template>
<script setup lang="ts">
import Sidebar from '@/components/drawlab/Sidebar.vue';
import SizeInput from '@/components/drawlab/SizeInput.vue';
import useCmToPx from '@/composables/useCmToPx';
import useBoardEvents from '@/composables/useBoardEvents';

definePageMeta({
  layout: 'lab',
});

const size = reactive({
  'B(胸圍)': 82,
  'BL(背長)': 37,
  'S(袖長)': 54,
});

const aux = reactive({
  鬆份: 5,
});

const canvasContainer = ref<HTMLElement | null>(null);
const canvas = ref<HTMLCanvasElement | null>(null);

const { cmToPx } = useCmToPx();

const { zoom, mouse, handleZoom, handleClickZoom, handleMouseDown, handleMouseMove, handleMouseUp } =
  useBoardEvents(canvasContainer);

const svgContent = ref('');

const updateSVGContent = () => {
  const svgWidth = (cmToPx(size['B(胸圍)']) / 2 + aux['鬆份']).toFixed(2);
  // console.log('[size]', size, '[aux]', aux, '[svgWidth]', svgWidth);
  svgContent.value = `<svg xmlns="http://www.w3.org/2000/svg" width="${svgWidth}" viewBox="0 0 259.19 244.36">
  <g>
    <g>
      <path stroke-linejoin="miter" fill="none" stroke="#231815" d="M258.69,57.67V243.86h-49.94l-89.42-18.97,10.26-96s38.04,6.43,35.7-43.62c0,0,.75-22.44-8.41-45.8L221.53,15.86s2.58,44.65,37.16,41.81Z"/>
      <line stroke="#231815" x1="129.6" y1="128.89" x2="258.69" y2="128.89"/>
      <line stroke="#231815" x1="119.34" y1="224.89" x2="258.69" y2="224.89"/>
      <line stroke="#231815" x1="208.76" y1="128.89" x2="208.76" y2="243.86"/>
      <line stroke="#231815" x1="166.33" y1="36.02" x2="166.33" y2="128.89"/>
    </g>
    <g>
      <path stroke-linejoin="miter" fill="none" stroke="#231815" d="M39.98,.6L114.31,26.15s-10.48,27.48-11.14,52.25,13.46,49.94,26.43,50.33l-10.26,96-118.84-.39V12.99s22.32,.19,26.32-1.55,7.74-2.32,13.16-10.84Z"/>
      <line stroke="#231815" x1="102.5" y1="22.09" x2="102.5" y2="128.73"/>
      <line stroke="#231815" x1=".5" y1="128.73" x2="129.6" y2="128.73"/>
    </g>
  </g>
</svg>`;
};

const drawCanvas = () => {
  updateSVGContent();
  // Create an SVG image
  const img = new Image();
  img.src = 'data:image/svg+xml,' + encodeURIComponent(svgContent.value);
  img.onload = () => {
    console.log('[draw]');
    if (canvas.value && svgContent.value) {
      const ctx = canvas.value.getContext('2d');
      if (ctx) {
        ctx.clearRect(0, 0, canvas.value.width, canvas.value.height);
        ctx.save();
        ctx.scale(zoom.scale, zoom.scale);

        // Draw the line
        ctx.beginPath();
        ctx.moveTo(mouse.offsetX, mouse.offsetY); // Start point
        ctx.lineTo(mouse.offsetX, mouse.offsetY + cmToPx(size['BL(背長)'])); // End point
        ctx.stroke(); // Draw the line

        // Draw the line
        const w = Number((cmToPx(size['B(胸圍)']) / 2 + aux['鬆份']).toFixed(2));
        ctx.beginPath();
        ctx.moveTo(mouse.offsetX, mouse.offsetY + cmToPx(size['BL(背長)'])); // Start point
        ctx.lineTo(mouse.offsetX + w, mouse.offsetY + cmToPx(size['BL(背長)'])); // End point
        ctx.stroke(); // Draw the line

        // Draw the image
        ctx.drawImage(img, mouse.offsetX, mouse.offsetY); // Adjust the position as needed
        ctx.restore();
      }
    }
  };
};

onMounted(() => {
  drawCanvas();
});
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
