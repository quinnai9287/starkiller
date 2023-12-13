// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  ssr: false,
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'ST/FND.',
      meta: [
        { name: 'Title', content: 'ST/FND.' },
        { name: 'description', content: 'My amazing site.' },
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
  css: ['@/assets/vendor-style.css', '@/assets/main.scss'],
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
