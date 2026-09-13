import { defineConfig } from "vite";

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
  ],
});
