import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import tailwindcss from "@tailwindcss/vite"
import path from "node:path"
import { createRequire } from "node:module"

// serve public/db.json as a small rest api at /api during development
// (public/db.json is fetched as a static file in production builds)
function jsonDatabase() {
  const require = createRequire(path.join(__dirname, "vite.config.js"))
  const dbPath = path.join(__dirname, "public", "db.json")

  return {
    name: "json-database",
    apply: "serve",
    configureServer(server) {
      const jsonServer = require("json-server")
      const app = jsonServer.create()
      app.use(jsonServer.bodyParser)
      app.use("/api", jsonServer.router(dbPath))

      server.middlewares.use((req, res, next) => {
        if (!req.url?.startsWith("/api")) return next()
        app(req, res, next)
      })
    },
  }
}

// vite config — https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), jsonDatabase()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    host: true,
    port: parseInt(process.env.PORT || "8443"),
    strictPort: true,
  },
})
