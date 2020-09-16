import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import vue from "rollup-plugin-vue";
import postcss from "rollup-plugin-postcss";
import peerDepsExternal from "rollup-plugin-peer-deps-external";

export default {
  input: "./src/lib/index.vue.js",

  output: [
    {
      format: "esm",
      name: "fa-design-system",
      format: "cjs",
      file: "./dist/vue.js",
      exports: "named",
    },
  ],

  plugins: [
    peerDepsExternal(),
    postcss({
      modules: false,
      minimize: true,
      sourceMap: "inline",
      use: ["sass"],
    }),
    resolve(),
    commonjs(),
    vue({
      css: false
    }),
  ],
  external: ["vue"],
};
