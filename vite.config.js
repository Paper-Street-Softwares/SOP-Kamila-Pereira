import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

function preloadCssPlugin() {
  return {
    name: "preload-css",
    transformIndexHtml(html) {
      return html.replace(
        /<link rel="stylesheet"(.*?)>/g,
        `<link rel="preload" as="style"$1><link rel="stylesheet"$1>`,
      );
    },
  };
}

export default defineConfig({
  plugins: [react(), preloadCssPlugin()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "index.html"),
        site: path.resolve(__dirname, "site.html"),
      },
    },
  },
});
