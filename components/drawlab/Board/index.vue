<template>
  <div class="w-full h-full relative">
    <Dock :data="dockData" @open="openSidePanel" />
    <ToolBar :data="data">
      <template #scale-controller>
        <ScaleController
          :zoom="zoom"
          @zoom-in="handleClickZoom('in', drawCanvas)"
          @zoom-out="handleClickZoom('out', drawCanvas)"
        />
      </template>
    </ToolBar>

    <Sidebar v-show="sidebarCollapsed" :active-panel="activePanel">
      <component v-if="activePanel.id" :measurements="data" :is="activePanel.component" />
    </Sidebar>

    <div
      class="draw-lab"
      ref="canvasContainerRef"
      style="width: 100%; height: 100%; cursor: default"
      @mousedown="handleMouseDown"
      @mousemove="(e) => handleMouseMove(e, drawCanvas)"
      @mouseup="handleMouseUp"
      tabindex="0"
    >
      <canvas ref="canvasRef" width="1920" height="1080" @wheel="(e) => handleZoom(e, drawCanvas)"></canvas>
      <!-- <SketchRule
        :thick="sketchRuleData.thick"
        :scale="sketchRuleData.scale"
        :width="582"
        :height="482"
        :startX="sketchRuleData.startX"
        :startY="sketchRuleData.startY"
        :shadow="sketchRuleData.shadow"
        :lines="sketchRuleData.lines"
      /> -->
    </div>
  </div>
</template>

<script lang="ts" setup>
import 'vue3-sketch-ruler/lib/style.css';
import ScaleController from './components/ScaleController.vue';
import Sidebar from '../Sidebar.vue';
import SizeInput from '../SizeInput.vue';
import Dock from '@/components/drawlab/Dock.vue';
import ToolBar from '../ToolBar.vue';
import useBoard from './useBoard';

import Information from '@/components/drawlab/SideBar/Info.vue';
import Marker from '@/components/drawlab/SideBar/Marker.vue';
import Measurements from '@/components/drawlab/SideBar/Measurements.vue';
import Printer from '@/components/drawlab/SideBar/Printer.vue';

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

const canvasContainerRef = ref(null);
const canvasRef = ref(null);
const sidebarCollapsed = ref(false);
const activePanel = ref({
  id: '',
  key: '',
  name: '',
  icon: '',
  component: null,
});

const dockData = ref([
  // {
  //   id: 1,
  //   key: 'information',
  //   name: 'Information',
  //   icon: 'Document',
  //   component: Information,
  // },
  {
    id: 2,
    key: 'marker',
    name: 'Marker',
    icon: 'EditPen',
    component: Marker,
  },
  {
    id: 3,
    key: 'measurements',
    name: 'Measurements',
    icon: 'SetUp',
    component: Measurements,
  },
  {
    id: 4,
    key: 'printer',
    name: 'Print out',
    icon: 'Printer',
    component: Printer,
  },
]);

const openSidePanel = (key: string) => {
  sidebarCollapsed.value = true;
  activePanel.value = dockData.value.find((item) => item.key === key) || {};
  console.log(dockData.value.find((item) => item.key === key));
};

const {
  zoom,
  drawCanvas,
  handleZoom,
  handleClickZoom,
  handleMouseDown,
  handleMouseMove,
  handleMouseUp,
  // SketchRule,
  // sketchRuleData,
} = useBoard(canvasContainerRef, canvasRef, props.data);

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
  position: relative;
}

.scale-controller-container {
  @apply flex justify-center items-center;
  .scale-text {
    @apply flex justify-center items-center;
    width: 50px;
  }
}
</style>
