import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    envPrefix: "REACT_ENV",
    plugins: [react()],
    base: './',
    build: {
        outDir: "build",
    },
})
