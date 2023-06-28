import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // ...outras configurações...
  server: {
    // Configuração do servidor
    hmr: {
      // habilitar suporte ao react-router-dom
      host: "localhost",
    },
    proxy: {
      // proxy para direcionar as requisições para a rota curinga
      "/api": {
        target: "http://localhost:5000",
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
    fs: {
      // fallback para index.html
      strict: false,
    },
  },
});
