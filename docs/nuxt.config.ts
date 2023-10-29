export default defineNuxtConfig({
  // https://github.com/nuxt-themes/docus
  extends: '@nuxt-themes/docus',
  devtools: { enabled: true },
  pinceau: {
    followSymbolicLinks: false,
    configFileName: 'tokens.config',
    runtime: false,
  }
})
