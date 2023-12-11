// composables/useCmToPx.js
export default function useCmToPx() {
    function cmToPx(cm: number) {
      const dpi = 96; // Assuming standard screen DPI is 96
  
      const inches = cm / 2.54;
      const px = inches * dpi;
      
      return px;
    }
  
    return { cmToPx };
  }
  