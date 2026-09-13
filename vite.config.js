import { cpSync } from "node:fs";
import { resolve } from "node:path";
import { defineConfig } from "vite";

const publicDirectory = resolve(__dirname, "public");
const distPublicDirectory = resolve(__dirname, "dist/public");

export default defineConfig({
  base: "./",
  publicDir: "public",
  plugins: [
    {
      name: "serve-public-prefix",
      configureServer(server) {
        server.middlewares.use((req, _res, next) => {
          if (req.url?.startsWith("/public/")) {
            req.url = req.url.replace(/^\/public/, "");
          }
          next();
        });
      },
    },
    {
      name: "preserve-public-prefix-for-production",
      closeBundle() {
        cpSync(publicDirectory, distPublicDirectory, { recursive: true });
      },
    },
  ],
});
