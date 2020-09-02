// previous style files regexes
const prevCssRegex = /\.css$/;
const prevCssModuleRegex = /\.module\.css$/;
const prevSassRegex = /\.(scss|sass)$/;
const prevSassModuleRegex = /\.module\.(scss|sass)$/;

// new style files regexes
const newCssRegex = /\.global\.css$/;
const newCssModuleRegex = /\.css$/;
const newSassRegex = /\.global\.(scss|sass)$/;
const newSassModuleRegex = /\.(scss|sass)$/;

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
        .oneOf.find((item) => String(item.test) == String(prevSassModuleRegex))
        .use.find(
          (item) => item.loader == require.resolve("css-loader")
        ).options.localsConvention = "camelCaseOnly";

      webpackConfig.module.rules
        .find((item) => item.oneOf)
        .oneOf.find(
          (item) => String(item.test) == String(prevCssRegex)
        ).test = newCssRegex;

      webpackConfig.module.rules
        .find((item) => item.oneOf)
        .oneOf.find(
          (item) => String(item.exclude) == String(prevCssModuleRegex)
        ).test = newCssModuleRegex;

      webpackConfig.module.rules
        .find((item) => item.oneOf)
        .oneOf.find(
          (item) => String(item.test) == String(prevCssModuleRegex)
        ).test = newCssModuleRegex;

      webpackConfig.module.rules
        .find((item) => item.oneOf)
        .oneOf.find(
          (item) => String(item.test) == String(prevSassRegex)
        ).test = newSassRegex;

      webpackConfig.module.rules
        .find((item) => item.oneOf)
        .oneOf.find(
          (item) => String(item.exclude) == String(prevSassModuleRegex)
        ).test = newSassModuleRegex;

      webpackConfig.module.rules
        .find((item) => item.oneOf)
        .oneOf.find(
          (item) => String(item.test) == String(prevSassModuleRegex)
        ).test = newSassModuleRegex;

      // TODO: Configure the file extensions to remove '.module'
      // TODO: configure a smarter import system to remove instances of './..'
      return webpackConfig;
    },
  },
};
