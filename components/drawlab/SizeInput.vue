<template>
  <div class="controll-panel">
    <el-row :gutter="20" class="mb-4" v-for="(inputValue, inputKey) in size" :key="inputKey">
      <span class="ml-3 w-[80px] text-gray-600 inline-flex items-center">{{ inputKey }}</span>
      <el-input-number v-model="size[inputKey]" :min="1" :max="300" @change="handleChange"></el-input-number>
    </el-row>
    <el-divider />
    <el-row :gutter="20" class="mb-4" v-for="(inputValue, inputKey) in aux" :key="inputKey">
      <span class="ml-3 w-[80px] text-gray-600 inline-flex items-center">{{ inputKey }}</span>
      <el-input-number v-model="aux[inputKey]" :min="1" :max="300" @change="handleChange"></el-input-number>
    </el-row>
  </div>
</template>

<script setup lang="ts">
const emits = defineEmits(['update:size', 'update:aux', 'refresh']);

const props = defineProps<{
  size: Record<string, number>;
  aux: Record<string, number>;
}>();

const { size, aux } = toRefs(props);

const handleChange = (key: string, value: number) => {
  // Emit an event to update the prop in the parent component
  // You may emit different events for size and aux props
  if (size.value.hasOwnProperty(key)) {
    size.value[key] = value;
    // Emit an event to notify the parent component about the change
    emits('update:size', { ...size.value });
  } else if (aux.value.hasOwnProperty(key)) {
    aux.value[key] = value;
    // Emit an event to notify the parent component about the change
    emits('update:aux', { ...aux.value });
  }

  emits('refresh');
};
</script>
