/* eslint-disable no-undef */
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import EnvironmentPlugin from "vite-plugin-environment";
import eslint from "vite-plugin-eslint";
import alias from "@rollup/plugin-alias";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
  plugins: [alias(), eslint(), EnvironmentPlugin([]), react()],
  define: {
    _global: {},
  },
  server: {
    port: 3000,
  },
});
