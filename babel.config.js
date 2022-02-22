const tsconfig = require('./tsconfig.json');

let rawAlias   = tsconfig.compilerOptions.paths;
let alias      = {};

for (let x in rawAlias) {
    alias[x.replace('/*', '')] = rawAlias[x].map(item => `./${item.replace('/*', '')}`);
}

module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      ["module-resolver", {
        alias: alias,
        "extensions": [
          ".js",
          ".jsx",
          ".ts",
          ".tsx",
          '.json',
        ]
      }],
    ]
  };
};
