import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@common": path.resolve(__dirname, "./src/common/index.ts"),
      "@icons": path.resolve(__dirname, "./src/icons/index.ts"),
      "@components": path.resolve(__dirname, "./src/components/index.ts"),
      "@pages": path.resolve(__dirname, "./src/pages/"),
      "@hooks": path.resolve(__dirname, "./src/hooks/index.ts"),
      "@contexts": path.resolve(__dirname, "./src/contexts/index.ts"),
    },
  },
});
