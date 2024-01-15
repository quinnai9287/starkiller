<template>
  <div class="scale-controller-container mx-2">
    <el-row>
      <el-button size="small" :icon="ZoomOut" circle @click="emit('zoom-out')" />

      <div class="scale-text text-sm mx-2">{{ (zoom.scale * 100).toFixed() }}%</div>
      <el-button size="small" :icon="ZoomIn" circle @click="emit('zoom-in')" />
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { ZoomOut, ZoomIn } from '@element-plus/icons-vue';
interface Zoom {
  scale: number;
}

const props = defineProps({
  zoom: {
    type: Object as PropType<Zoom>,
    required: true,
  },
});

const emit = defineEmits(['zoom-out', 'zoom-in']);
const { zoom } = toRefs(props);
</script>
