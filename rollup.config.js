// rollup.config.js
import babel from "rollup-plugin-babel";
import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import postcss from "rollup-plugin-postcss";
import { terser } from "rollup-plugin-terser";
import peerDepsExternal from "rollup-plugin-peer-deps-external";

export default {
  input: "./src/lib/index.js",

  output: [
    {
      name: "fa-design-system",
      sourcemap: true,
      file: "./dist/index.js",
      format: "cjs",
      globals: { react: "React" },
      plugins: [terser()],
    },
  ],

  plugins: [
    peerDepsExternal(),
    postcss({
      // extract: "index.css",
      modules: false,
      minimize: true,
      sourceMap: "inline",
      use: ["sass"],
    }),
    resolve(),
    babel({ exclude: "node_modules/**" }),
    commonjs(),
  ],

  external: ["react", "react-dom", "prop-types"],
};
