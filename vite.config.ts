import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      Components: path.resolve(__dirname, "./src/components"),
      Utils: path.resolve(__dirname, "./src/utils"),
    },
  },
  plugins: [react()],
});
