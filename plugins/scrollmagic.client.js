import ScrollMagic from 'scrollmagic';

export default defineNuxtPlugin((nuxtApp) => {
  return {
    provide: {
      ScrollMagic,
    },
  };
});
