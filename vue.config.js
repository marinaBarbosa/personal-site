module.exports = {
  lintOnSave: false,
  css: {
    loaderOptions: {
      sass: {
        data: `
          @import "@/styles/main.scss";
        `
      }
    }
  }
}
