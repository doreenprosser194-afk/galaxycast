import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  
  server: {
    host: "127.0.0.1",
    port: 8080,
    strictPort: true,
    fs: {
      strict: false,
    },
  },

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  build: {
    target: "ES2020",
    sourcemap: false,
  },
}));
