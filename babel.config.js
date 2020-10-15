module.exports = function(api) {
  console.log('api: ', api);

  api.cache(true);

  const presets = ["@babel/preset-env", "@babel/preset-react"];
  const plugins = [
    "@babel/plugin-syntax-dynamic-import",
    "@babel/plugin-proposal-class-properties",
    "@babel/plugin-transform-react-jsx",
    "@babel/plugin-proposal-decorators", { "legacy": true }
  ];

  return {
    presets,
    plugins
  };
};
