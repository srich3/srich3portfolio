import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // Use VITE_BASE from env, fallback to '/' for dev and '/srich3portfolio/' for prod
  const base = process.env.VITE_BASE || (mode === 'production' ? '/srich3portfolio/' : '/');
  return {
    plugins: [react()],
    base,
  };
});
