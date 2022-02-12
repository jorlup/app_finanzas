import { compilerOptions } from './tsconfig.json';
let rawAlias   = compilerOptions.paths;
let alias      = {};

for (let x in rawAlias) {
    alias[x.replace('/*', '')] = rawAlias[x].replace('/*', '');
}

export default function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      ["module-resolver", {
        alias,
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
