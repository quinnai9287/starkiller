// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'STFN | Portfolio',
      meta: [
        { name: 'Title', content: 'STFN | Portfolio' },
        { name: 'description', content: 'My amazing site.' },
      ],
      bodyAttrs: {
        class: 'test',
      },
    },
  },
  devtools: { enabled: true },
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
  modules: ['@fullpage/nuxt-fullpage', '@element-plus/nuxt'],
});
