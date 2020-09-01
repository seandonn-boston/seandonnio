module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      let options = webpackConfig.module.rules
        .find((item) => item.oneOf)
        .oneOf.find((item) => String(item.test) == String(/\.css$/))
        .use.find((item) => item.loader == require.resolve("css-loader"))
        .options;

      options.camelCase = true;

      return webpackConfig;
    },
  },
};
