import { VitePWA } from "vite-plugin-pwa";

export default {
  plugins: [
    VitePWA({
      registerType: "autoUpdate",
    }),
  ],
  base: "/unit-convert-vite/",
};
