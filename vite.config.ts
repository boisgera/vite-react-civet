import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import civetVitePlugin from '@danielx/civet/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    civetVitePlugin({}),
    react()],
})
