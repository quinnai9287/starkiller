<template>
  <div class="emoji-container p-10" @click="setObjectPosition">
    <Emoji class="emoji" v-for="obj in objects" :key="obj" :style="getStyle(obj)" @click.stop="deleteObject(obj)" />
  </div>
</template>

<script setup>
const objects = reactive([]);

const getStyle = (obj) => {
  return {
    position: 'absolute',
    top: `${obj.offsetY}px`,
    left: `${obj.offsetX}px`,
  };
};

const deleteObject = (obj) => {
  const index = objects.indexOf(obj);
  objects.splice(index, 1);
};

const setObjectPosition = (e) => {
  const { offsetX, offsetY } = e;
  objects.push({ offsetX, offsetY });
};
</script>
<style lang="scss" scoped>
.emoji-container {
  position: relative;
  width: 500px;
  border: 1px solid #000;
  height: 500px;
  background-color: #fff;
}

.emoji {
  display: block;
  user-select: none;
  cursor: pointer;
}
</style>
