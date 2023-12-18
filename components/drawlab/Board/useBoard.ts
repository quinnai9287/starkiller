import useCmToPx from '@/composables/useCmToPx';
import useBoardEvents from '@/composables/useBoardEvents';
import useRuler from '@/composables/useRuler';
import SketchRule from 'vue-sketch-ruler';

export default function (
  canvasContainer: any,
  canvas: any,
  data: {
    size: { [key: string]: number };
    aux: { [key: string]: number };
  },
) {
  const svgContent = ref('');

  const sketchRuleData = ref({
    scale: 2, //658813476562495, //1,
    startX: 0,
    startY: 0,
    lines: {
      h: [100, 200],
      v: [100, 200],
    },
    thick: 20,
    isShowRuler: true,
    isShowReferLine: true,
  });

  const { cmToPx } = useCmToPx();

  const { zoom, mouse, handleZoom, handleClickZoom, handleMouseDown, handleMouseMove, handleMouseUp } =
    useBoardEvents(canvasContainer);

  const { drawGrid } = useRuler(canvas);

  const updateSVGContent = () => {
    const svgWidth = (cmToPx(data.size['B(胸圍)']) / 2 + data.aux['鬆份']).toFixed(2);
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
          ctx.clearRect(0, 0, canvas.value.width * 10, canvas.value.height * 10);
          ctx.save();
          ctx.scale(zoom.scale, zoom.scale);

          drawGrid(ctx);

          // Draw the line
          //   ctx.beginPath();
          //   ctx.moveTo(mouse.offsetX, mouse.offsetY); // Start point
          //   ctx.lineTo(mouse.offsetX, mouse.offsetY + cmToPx(data.size['BL(背長)'])); // End point
          //   ctx.stroke(); // Draw the line

          //   // Draw the line
          //   const w = Number((cmToPx(data.size['B(胸圍)']) / 2 + data.aux['鬆份']).toFixed(2));
          //   ctx.beginPath();
          //   ctx.moveTo(mouse.offsetX, mouse.offsetY + cmToPx(data.size['BL(背長)'])); // Start point
          //   ctx.lineTo(mouse.offsetX + w, mouse.offsetY + cmToPx(data.size['BL(背長)'])); // End point
          //   ctx.stroke(); // Draw the line

          //   // Draw the image
          //   ctx.drawImage(img, mouse.offsetX, mouse.offsetY); // Adjust the position as needed
          //   ctx.restore();
        }
      }
    };
  };

  onMounted(() => {
    drawCanvas();
  });

  return {
    zoom,
    handleZoom,
    handleClickZoom,
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
    drawCanvas,
    SketchRule,
    sketchRuleData,
  };
}
