const sassModuleRegex = /\.module\.(scss|sass)$/;

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      // this css-loader config addition converts SCSS kebab-case selectors to camelCase in the imported css-modules styles object within components
      // traverse down the large webpackConfig object and then create and set `localsConvention: "camelCaseOnly"`
      // css-loader is currently v3.4.2 as of create-react-app v3.4.1
      // keep an eye on CRA updates: https://github.com/facebook/create-react-app
      // keep an eye on css-loader updates: https://github.com/webpack-contrib/css-loader
      webpackConfig.module.rules
        .find((item) => item.oneOf)
        .oneOf.find((item) => String(item.test) == String(sassModuleRegex))
        .use.find(
          (item) => item.loader == require.resolve("css-loader")
        ).options.localsConvention = "camelCaseOnly";

      return webpackConfig;
    },
  },
};
