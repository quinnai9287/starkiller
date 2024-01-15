// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  ssr: false,
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'ST/FND. | Make your website attractive again',
      meta: [
        { name: 'Title', content: 'ST/FND. | Make your website attractive again' },
        { name: 'description', content: '"If you want a beautiful and attractive website, I can help.' },
        { hid: 'og:title', property: 'og:title', content: 'ST/FND. | Make your website attractive again' },
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'If you want a beautiful and attractive website, I can help.',
        },
        { hid: 'og:image', property: 'og:image', content: 'https://example.com/image.jpg' },
        { hid: 'og:url', property: 'og:url', content: 'https://quinnai9287.github.io/' },
        { hid: 'og:type', property: 'og:type', content: 'website' },
      ],
      bodyAttrs: {
        class: 'test',
      },
      script: [
        {
          src: 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r77/three.min.js',
        },
      ],
    },
    pageTransition: { name: 'page', mode: 'out-in' },
  },
  // devtools: { enabled: true },
  css: ['@/assets/vendor-style.css', '@/assets/main.scss', 'aos/dist/aos.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/stfn/_variables.scss" as *;',
        },
      },
    },
  },
  modules: ['@fullpage/nuxt-fullpage', '@element-plus/nuxt', '@pinia/nuxt'],
  pinia: {
    storesDirs: ['./stores/**'],
  },
});
