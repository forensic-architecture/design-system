// useful reference here: https://engineering.mixmax.com/blog/rollup-externals/
// https://blog.harveydelaney.com/creating-your-own-react-component-library/
import babel from "@rollup/plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import postcss from "rollup-plugin-postcss";
import { terser } from "rollup-plugin-terser";
import json from "@rollup/plugin-json";
import bundleSize from "rollup-plugin-bundle-size";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import path from "path";

import pkg from "./package.json";

// console.log(path.resolve(__dirname, "node_modules/react"));

export default {
  input: "./src/lib/index.react.js",
  output: [
    {
      sourcemap: true,
      file: pkg.main,
      format: "cjs",
      globals: {
        react: "React",
        "react-dom": "ReactDOM",
        marked: "marked",
        "prop-types": "PropTypes",
      },
      plugins: [terser(), bundleSize()],
    },
    {
      sourcemap: true,
      file: "./dist/react.umd.js",
      format: "umd",
      name: "DesignSystem",
      globals: {
        react: "React",
        "react-dom": "ReactDOM",
        marked: "marked",
        "prop-types": "PropTypes",
      },
      plugins: [terser(), bundleSize()],
    },
    {
      sourcemap: true,
      file: pkg.module,
      format: "esm",
      globals: {
        react: "React",
        "react-dom": "ReactDOM",
        marked: "marked",
        "prop-types": "PropTypes",
      },
      plugins: [terser(), bundleSize()],
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
    json({ compact: true }),
    babel({
      exclude: ["node_modules/**", "src/*.js"],
      babelHelpers: "bundled",
    }),
    resolve(),
    commonjs(),
  ],

  external: ["react", "react-dom", "prop-types", "marked"],
};
