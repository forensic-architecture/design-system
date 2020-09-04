// rollup.config.js
import babel from "rollup-plugin-babel";
import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import postcss from "rollup-plugin-postcss";
import peerDepsExternal from "rollup-plugin-peer-deps-external";

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
    postcss({
      extract: false,
      modules: false,
      use: ["sass"],
    }),
    babel({ exclude: "node_modules/**" }),
    resolve(),
    commonjs(),
  ],

  external: ["react", "react-dom", "react-proptypes"],
};
