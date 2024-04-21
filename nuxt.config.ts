export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['@/assets/style/main.css'],
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
  modules: [
    'nuxt-lucide-icons'
  ],

  lucide: {
    namePrefix: 'Icon'
  },
  
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})