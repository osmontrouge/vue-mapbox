module.exports = {
  productionSourceMap: false,
  configureWebpack: {
    externals: {
      "maplibre-gl": {
        commonjs: "maplibre-gl",
        commonjs2: "maplibre-gl",
        amd: "maplibre-gl",
        root: "maplibre-gl"
      },
      vue: {
        commonjs: "vue",
        commonjs2: "vue",
        amd: "vue",
        root: "vue"
      },
      "map-promisified": {
        commonjs: "map-promisified",
        commonjs2: "map-promisified",
        amd: "map-promisified",
        root: "map-promisified"
      }
    }
  }
};
