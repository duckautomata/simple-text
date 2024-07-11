import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(() => ({
    base: "/simple-text",
    plugins: [react()],
    server: {
        port: 5173,
        open: false,
    },
    build: {
        emptyOutDir: true,
        manifest: false,
        target: "esnext",
        outDir: "simple-text"
    },
}));
