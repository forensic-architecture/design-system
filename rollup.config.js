// rollup.config.js
import babel from "rollup-plugin-babel";
import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import postcss from "rollup-plugin-postcss";
import postcssModules from "postcss-modules";
import peerDepsExternal from "rollup-plugin-peer-deps-external";

const cssExportMap = {};

export default {
  input: "./src/lib/index.js",

  output: [
    {
      name: "design-system",
      sourcemap: true,
      file: "./dist/index.js",
      format: "cjs",
      globals: { react: "React" },
    },
  ],

  plugins: [
    peerDepsExternal(),
    // postcss({
    //   extract: false,
    //   modules: false,
    //   use: ["sass"],
    // }),
    postcss({
      plugins: [
        postcssModules({
          getJSON(id, exportTokens) {
            cssExportMap[id] = exportTokens;
          },
        }),
      ],
      getExportNamed: false,
      getExport(id) {
        return cssExportMap[id];
      },
      extract: "styles.css",
      use: ["sass"],
    }),
    babel({ exclude: "node_modules/**" }),
    resolve(),
    commonjs(),
  ],

  external: ["react", "react-dom", "prop-types"],
};
