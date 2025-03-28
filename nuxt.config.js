// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ["~/assets/scss/global.scss"],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/scss/_colors.scss" as *;',
        },
      },
    },
  },
  modules: ["@pinia/nuxt", "@nuxt/image"],

  nitro: {
    routeRules: {
      "/_nuxt/**": { cache: { maxAge: 3600 } },
      "/images/**": { cache: { maxAge: 86400 } },
    },
  },
});
