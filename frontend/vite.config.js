import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/getDecks": {
        target: "http://localhost:3001",
        changeOrigin: true,
      },
      "/getFlashcards": {
        target: "http://localhost:3001",
        changeOrigin: true,
      },
      "/addDeck": {
        target: "http://localhost:3001",
        changeOrigin: true,
      },
      "/addCard": {
        target: "http://localhost:3001",
        changeOrigin: true,
      },
      "/test": {
        target: "http://localhost:3001",
        changeOrigin: true,
      },
      "/deleteDecks": {
        target: "http://localhost:3001",
        changeOrigin: true,
      },
      "/deleteCard": {
        target: "http://localhost:3001",
        changeOrigin: true,
      },
      "/incrementDeck": {
        target: "http://localhost:3001",
        changeOrigin: true,
      },
      "/incrementCard": {
        target: "http://localhost:3001",
        changeOrigin: true,
      },
      "/decrementDeck": {
        target: "http://localhost:3001",
        changeOrigin: true,
      },
      "/decrementCard": {
        target: "http://localhost:3001",
        changeOrigin: true,
      },
      "/editCard": {
        target: "http://localhost:3001",
        changeOrigin: true,
      },
      "/incrementTests": {
        target: "http://localhost:3001",
        changeOrigin: true,
      },
    },
  },
  define: {
    // eslint-disable-next-line no-undef
    "process.env": process.env,
  },
});
