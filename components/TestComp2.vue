<template>
  <div class="emoji-container p-10" @mousedown="onMouseDown" @mousemove.self="onMousemove" @mouseup="onMouseup">
    <Emoji class="emoji" v-for="obj in objects" :key="obj" :style="getStyle(obj)" @click.stop="deleteObject(obj)" />
  </div>
</template>

<script setup>
const objects = reactive([]);
const isDragging = ref(false);
const tempObjectPosition = ref({ offsetX: 0, offsetY: 0 });

function throttle(fn, delay) {
  let timer = null;
  return (...args) => {
    if (timer) return;
    timer = setTimeout(() => {
      fn(...args);
      timer = null;
    }, delay);
  };
}

function debounce(fn, delay) {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}

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
  tempObjectPosition.value = { offsetX, offsetY };
};

const onMouseDown = (e) => {
  isDragging.value = true;
};

const onMousemove = (e) => {
  if (isDragging.value) {
    const deltaX = Math.abs(tempObjectPosition.value.offsetX - e.offsetX);
    const deltaY = Math.abs(tempObjectPosition.value.offsetY - e.offsetY);

    if (deltaX < 30 && deltaY < 30) return;
    setObjectPosition(e);
  }
};

const onMouseup = () => {
  console.log('mouseup');
  isDragging.value = false;
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
  transform: translate(-50%, -50%);
}
</style>
