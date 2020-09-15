import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import vue from "rollup-plugin-vue";
import postcss from "rollup-plugin-postcss";

export default {
  input: "./src/lib/index.vue.js",

  output: [
    {
      format: "esm",
      name: "fa-design-system",
      file: "./dist/vue/index.js",
      exports: "named",
    },
  ],

  plugins: [
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
};
