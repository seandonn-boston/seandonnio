// TODO: configure a smarter import system to remove instances of './..'

// previous style files regexes
const cssRegex = /\.css$/;
const sassRegex = /\.(scss|sass)$/;
const moduleCssRegex = /\.module\.css$/;
const moduleSassRegex = /\.module\.(scss|sass)$/;
const globalCssRegex = /\.global\.css$/;
const globalSassRegex = /\.global\.(scss|sass)$/;

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      // NOTE: due to the find-by-moduleSassRegex, this config logic must come before the file extension changing logic
      // this css-loader config addition converts SCSS kebab-case selectors to camelCase in the imported css-modules styles object within components
      // traverse down the large webpackConfig object and then create and set `localsConvention: "camelCaseOnly"`
      // css-loader is currently v3.4.2 as of create-react-app v3.4.1
      // keep an eye on CRA updates: https://github.com/facebook/create-react-app
      // keep an eye on css-loader updates: https://github.com/webpack-contrib/css-loader
      let moduleSassRegexCssLoaderOptions = webpackConfig.module.rules
        .find((item) => item.oneOf)
        .oneOf.find((item) => String(item.test) == String(moduleSassRegex))
        .use.find((item) => item.loader == require.resolve("css-loader"))
        .options;

      moduleSassRegexCssLoaderOptions.localsConvention = "camelCaseOnly";

      // These config adjustments are for changing the extensions used in the css and scss file naming conventions
      // `*.module.scss` and `*.module.css` becomes `*.scss` and `*.css`
      // non module-scss `*.scss` and `*.css` becomes `*.global.scss` and `*.global.css`
      let cssRegexTest = webpackConfig.module.rules
        .find((item) => item.oneOf)
        .oneOf.find((item) => String(item.test) == String(cssRegex));

      let moduleCssRegexExclude = webpackConfig.module.rules
        .find((item) => item.oneOf)
        .oneOf.find((item) => String(item.exclude) == String(moduleCssRegex));

      let moduleCssRegexTest = webpackConfig.module.rules
        .find((item) => item.oneOf)
        .oneOf.find((item) => String(item.test) == String(moduleCssRegex));

      let sassRegexTest = webpackConfig.module.rules
        .find((item) => item.oneOf)
        .oneOf.find((item) => String(item.test) == String(sassRegex));

      let moduleSassRegexExclude = webpackConfig.module.rules
        .find((item) => item.oneOf)
        .oneOf.find((item) => String(item.exclude) == String(moduleSassRegex));

      let moduleSassRegexTest = webpackConfig.module.rules
        .find((item) => item.oneOf)
        .oneOf.find((item) => String(item.test) == String(moduleSassRegex));

      cssRegexTest.test = globalCssRegex;
      moduleCssRegexExclude.exclude = moduleCssRegexTest.test = cssRegex;
      sassRegexTest.test = globalSassRegex;
      moduleSassRegexExclude.exclude = moduleSassRegexTest.test = sassRegex;

      return webpackConfig;
    },
  },
};
