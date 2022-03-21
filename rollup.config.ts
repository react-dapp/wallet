import babel from "@rollup/plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import external from "rollup-plugin-peer-deps-external";
import del from "rollup-plugin-delete";
import postcss from "rollup-plugin-postcss";
import pkg from "./package.json";
import image from "@rollup/plugin-image";
import json from "@rollup/plugin-json";
import typescript from "@rollup/plugin-typescript";
import sourcemaps from "rollup-plugin-sourcemaps";
import commonjs from "@rollup/plugin-commonjs"

const extensions = [".js", ".ts",".tsx", "jsx", "css"];

export default {
  input: [pkg.source],
  output: [
    { file: pkg.main, format: "cjs", sourcemap: true },
    { file: pkg.module, format: "es", sourcemap: true },
  ],
  plugins: [
    typescript({
      tsconfig: "./tsconfig.json",
      outputToFilesystem: true,
      sourceMap: true,
      inlineSourceMap: true,
      inlineSources: true,
    }),
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
      babelHelpers: "bundled",
    }),
    del({ targets: ["dist/*"] }),
    sourcemaps(),
    // commonjs(),
  ],
  external: [Object.keys({ ...pkg.dependencies, ...pkg.peerDependencies } || {})],
};
