import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import fs from "fs";
import path from "path";

const isDev = process.env.NODE_ENV === "development";

export default defineConfig({
  plugins: [react()],
  server: isDev
    ? {
        https: {
          key: fs.readFileSync(path.resolve(__dirname, "cert/server.key")),
          cert: fs.readFileSync(path.resolve(__dirname, "cert/server.crt")),
        },
        host: "0.0.0.0",
      }
    : undefined, // 在 vercel 上不要設定 https
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
