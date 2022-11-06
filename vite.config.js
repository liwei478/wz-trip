import { fileURLToPath, URL } from "node:url"

import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"

import Components from "unplugin-vue-components/vite"
import { VantResolver } from "unplugin-vue-components/resolvers"

// https://vitejs.dev/config/
export default defineConfig({
  base: "/wz-trip/dist/",
  plugins: [
    vue(),
    Components({
      resolvers: [VantResolver()]
    })
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url))
    }
  },
  server: {
    port: 3000,
    proxy: {
      "^/api": {
        target: "https://m.tujia.com",
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, "")
      }
    }
  }
})
