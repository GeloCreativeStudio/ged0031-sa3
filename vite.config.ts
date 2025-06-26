import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      onwarn(warning, warn) {
        // Suppress "SOURCEMAP_ERROR" warnings from node_modules
        if (warning.code === 'SOURCEMAP_ERROR' && warning.id?.includes('node_modules')) {
          return
        }
        warn(warning)
      }
    }
  }
})