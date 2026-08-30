import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base must match the GitHub Pages repository name:
// https://tanjimapinke.github.io/tanjima-portfolio/
export default defineConfig({
  plugins: [react()],
  base: '/tanjima-portfolio/',
})
