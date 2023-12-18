import useCmToPx from '@/composables/useCmToPx';

export default function (canvas: any) {
  let useCm = true; // Flag to switch between cm and pixels

  const { cmToPx } = useCmToPx();
  const nuxtApp = useNuxtApp();

  console.log('[nuxtApp]', nuxtApp);

  const drawGrid = (ctx: any) => {
    console.log('[drawRuler]', ctx);

    ctx.strokeStyle = '#ccc';
    ctx.lineWidth = 1;

    if (useCm) {
      const gridMaxWidth = canvas.value.width * 10;
      const gridMaxHeight = canvas.value.height * 10;
      const step = cmToPx(1);

      console.log('[step]', step);

      for (let i = 0; i <= gridMaxWidth; i += step) {
        ctx.beginPath();
        ctx.moveTo(i, 0);
        ctx.lineTo(i, gridMaxWidth);
        ctx.stroke();
      }

      for (let j = 0; j <= gridMaxHeight; j += step) {
        ctx.beginPath();
        ctx.moveTo(0, j);
        ctx.lineTo(gridMaxHeight, j);
        ctx.stroke();
      }
    } else {
      const pixels = canvas.value.width; // Total length of the canvas in pixels
      const step = 50;

      for (let i = 0; i <= pixels; i += step) {
        ctx.beginPath();
        ctx.moveTo(i, 0);
        ctx.lineTo(i, canvas.value.height);
        ctx.stroke();
      }

      for (let j = 0; j <= canvas.value.height; j += step) {
        ctx.beginPath();
        ctx.moveTo(0, j);
        ctx.lineTo(canvas.value.width, j);
        ctx.stroke();
      }
    }
  };

  return {
    drawGrid,
  };
}
