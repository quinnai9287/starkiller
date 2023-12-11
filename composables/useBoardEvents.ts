export default function (canvasContainer: any) {
  const isSpacePressed = ref(false);
  const isAltPressed = ref(false);
  const zoom = reactive({
    scale: 0.5,
    minScale: 0.1,
    maxScale: 1,
    zoomSpeed: 0.05,
  });

  const mouse = reactive({
    isDragging: false,
    startX: 0,
    startY: 0,
    offsetX: 600,
    offsetY: 150,
  });

  const handleZoom = (event: WheelEvent, callback: Function) => {
    event.preventDefault();
    if (!isAltPressed.value) return;
    const delta = event.deltaY * -zoom.zoomSpeed;

    if (delta < 0) {
      // Zoom in
      if (zoom.scale < zoom.maxScale) {
        zoom.scale += zoom.zoomSpeed;
      }
    } else {
      // Zoom out
      if (zoom.scale > zoom.minScale) {
        zoom.scale -= zoom.zoomSpeed;
      }
    }

    callback();
  };

  const handleClickZoom = (type: 'in' | 'out', callback: Function) => {
    if (type === 'in') {
      // Zoom in
      if (zoom.scale < zoom.maxScale) {
        zoom.scale += zoom.zoomSpeed;
      }
    } else {
      // Zoom out
      if (zoom.scale > zoom.minScale) {
        zoom.scale -= zoom.zoomSpeed;
      }
    }

    callback();
  };

  const handleKeyDown = (event: any) => {
    console.log('handleSpaceKeyDown');
    event.preventDefault();
    if (event.code === 'Space') {
      if (canvasContainer.value) {
        canvasContainer.value.style.cursor = 'grabbing';
        isSpacePressed.value = true;
      }
    }
    if (event.altKey && event.code === 'AltLeft') {
      canvasContainer.value.style.cursor = 'zoom-in';
      isAltPressed.value = true;
    }
  };

  const handleKeyUp = () => {
    console.log('handleSpaceKeyUp');
    if (canvasContainer.value) {
      canvasContainer.value.style.cursor = 'default';
      isSpacePressed.value = false;
      isAltPressed.value = false;
    }
  };

  const handleMouseDown = (event: MouseEvent) => {
    event.preventDefault();
    mouse.isDragging = true;
    mouse.startX = event.clientX - mouse.offsetX;
    mouse.startY = event.clientY - mouse.offsetY;
  };

  const handleMouseMove = (event: MouseEvent, callback: Function) => {
    event.preventDefault();
    if (mouse.isDragging && isSpacePressed.value) {
      mouse.offsetX = event.clientX - mouse.startX;
      mouse.offsetY = event.clientY - mouse.startY;

      callback();
    }
  };

  const handleMouseUp = () => {
    mouse.isDragging = false;
  };

  onMounted(() => {
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
  });

  onBeforeUnmount(() => {
    window.removeEventListener('keydown', handleKeyDown);
    window.removeEventListener('keyup', handleKeyUp);
  });

  return {
    zoom,
    mouse,
    handleZoom,
    handleClickZoom,
    handleKeyDown,
    handleKeyUp,
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
  };
}
