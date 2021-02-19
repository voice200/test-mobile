module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  css: {
    requireModuleExtension: false,
    loaderOptions: {
      sass: {
        additionalData: `@import "~@/assets/styles/style.scss"`
      },
    }
  }
}
