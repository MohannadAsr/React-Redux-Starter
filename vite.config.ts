import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  resolve: {
    alias: {
      '@components': path.resolve('src/components'),
      '@src': path.resolve('src/'),
      '@plugins': path.resolve('src/plugins'),
      '@reducers': path.resolve('src/reducers'),
      '@actions': path.resolve('src/actions'),
      '@store': path.resolve('src/store'),
    },
  },
});
