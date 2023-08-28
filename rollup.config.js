import vue from "rollup-plugin-vue";
import css from "rollup-plugin-css-only";
import image from "@rollup/plugin-image";

export default {
  input: "src/main.js",
  output: {
    file: "dist/bundle.js",
    format: "esm",
  },
  plugins: [css(), vue({ css: false }), image()],
  external: ["vue"],
};
