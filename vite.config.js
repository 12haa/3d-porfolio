import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      manifest: {
        name: "3D Porfolio",
        short_name: "3D Porfolio",
        description: "3D Porfolio",
        start_url: "/",
        display: "standalone",
        theme_color: "#000000",
        background_color: "#ffffff",
        icons: [
          {
            src: "/icons/backend-565fc01f",
            sizes: "192x192",
            type: "image/png",
            purpose: "any maskable",
          },
          // {
          //   src: "/icons/backend-565fc01f",
          //   sizes: "512x512",
          //   type: "image/png",
          // },
          // {
          //   src: "/icons/backend-565fc01f",
          // },
        ],
      },
    }),
  ],
});
