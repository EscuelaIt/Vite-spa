import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
    server: {
        port: 3000,
    },
    build: {
        target: 'es2015',
        rollupOptions: {
            external: [
            
            ]
        }
    },
})