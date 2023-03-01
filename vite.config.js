import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs-extra';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      plugins: [
        {
          name: 'copy-file-plugin',
          generateBundle: async () => {
            // 複製檔案
            await fs.copy(
              path.resolve(__dirname, 'src/components/collections'), // 原始檔案路徑
              path.resolve(__dirname, 'public/collections') // 目標檔案路徑
            );
          },
        },
      ],
    },
  },
});
