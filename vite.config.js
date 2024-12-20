import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: './src/SuccessModal.jsx',
      name: 'SuccessModal',
      fileName: (format) => `success-modal.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        format: ['es', 'cjs', 'umd'],
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
        exports: 'auto',
      },
    },
  },
})
