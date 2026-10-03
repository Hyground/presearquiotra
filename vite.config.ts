import { defineConfig } from "vite";
export default defineConfig(({ mode }) => ({
  base: mode === "development" ? "/" : "/presearquiotra/",
  esbuild: { jsx: "automatic" },
}));
