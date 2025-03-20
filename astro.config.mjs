// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    react(),
  ],
  server: {
    host: true,
    port: 4321,
  },
  vite: {
    server: {
      // allowedHosts: ["5c15-112-196-82-212.ngrok-free.app"],
      allowedHosts: ["e1c5-112-196-82-212.ngrok-free.app"]
      
    
    },
  },
});
