import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  root: './',    
  base: process.env.Vite_GITHUB_PAGES // この行を追加
  ? "/ReactVite-ver2/"            // この行を追加
  : "/ReactVite-ver2/",                     // この行を追加
  publicDir: 'public',
  plugins: [react()],
  build: {
    // `root` からの相対パスで指定する
    outDir: '../dist',
  },
  envDir: './',
})
