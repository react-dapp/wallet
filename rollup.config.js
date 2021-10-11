import babel from "@rollup/plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import external from "rollup-plugin-peer-deps-external";
import del from "rollup-plugin-delete";
import postcss from "rollup-plugin-postcss";
import pkg from "./package.json";
import image from "@rollup/plugin-image";
import json from "@rollup/plugin-json";

const extensions = [".js", ".ts", "jsx", "css"];

export default {
  input: [pkg.source],
  output: [
    { file: pkg.main, format: "cjs" },
    { file: pkg.module, format: "esm" },
  ],
  plugins: [
    json(),
    image(),
    external(),
    postcss({
      extract: false,
      modules: true,
      use: ["sass"],
    }),
    resolve({
      extensions,
    }),
    babel({
      exclude: "node_modules/**",
    }),
    del({ targets: ["dist/*"] }),
  ],
  external: [Object.keys(pkg.dependencies || {})],
};
