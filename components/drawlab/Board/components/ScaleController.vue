<template>
  <div class="scale-controller-container">
    <el-row>
      <el-button @click="emit('zoom-out')">
        <el-icon><ZoomOut /></el-icon>
      </el-button>

      <div class="scale-text">{{ (zoom.scale * 100).toFixed() }}%</div>
      <el-button @click="emit('zoom-in')">
        <el-icon><ZoomIn /></el-icon>
      </el-button>
    </el-row>
  </div>
</template>

<script setup lang="ts">
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
