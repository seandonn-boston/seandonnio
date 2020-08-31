/* craco.config.js */

const postcssNormalize = require("postcss-normalize");

const loaders = [
  true,
  true,
  {
    loader: require.resolve("css-loader"),
    options: {
      importLoaders: 1,
      sourceMap: true,
      camelCase: true,
    },
  },
  {
    loader: require.resolve("postcss-loader"),
    options: {
      ident: "postcss",
      plugins: () => [
        require("postcss-flexbugs-fixes"),
        require("postcss-present-env")({
          autoprefixer: {
            flexbox: "no-2009",
          },
          stage: 3,
        }),
        postCSSNormalize(),
      ],
      sourceMap: true,
    },
  },
];

module.exports = {
  webpack: {
    module: {
      rules: {
        oneOf: [
          {
            test: /\.css$/,
            exclude: /\.module\.css$/,
            use: loaders,
            sideEffects: true,
          },
        ],
      },
    },
  },
};
