import { resolve } from 'node:path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  return defineConfig({
    resolve: {
      alias: {
        '@': resolve(__dirname, './src'),
        '@/ui': resolve(__dirname, './src/components/ui'),
      },
    },
    plugins: [react()],
    base: '/',
    server: {
      port: parseInt(process.env.VITE_PORT) || 3001,
    },
  });
};
