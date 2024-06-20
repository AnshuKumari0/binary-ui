import typescript from "rollup-plugin-typescript2";
// import resolve from "@rollup/plugin-node-resolve";

export default {
  input: "src/index.ts",
  output: [
    {
      file: "dist/bundle.js",
      format: "cjs",
    },
    {
      file: "dist/bundle.esm.js",
      format: "esm",
    },
  ],
  plugins: [typescript()],
  external: ["react", "react-dom", /@mui\//, 'react/jsx-runtime'],
};
