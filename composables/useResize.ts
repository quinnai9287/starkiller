export default function useResize() {
    
  const dynamicHeight = ref('100vh');

  const handleResize = () => {
    dynamicHeight.value = `${window.innerHeight}px`;
  }
  
  onMounted(() => {
    window.addEventListener('resize', () => handleResize) ;
    handleResize()
  })

  onUnmounted(() => {
    window.removeEventListener('resize', () => handleResize) ;
  })

    return { dynamicHeight };
  }
  