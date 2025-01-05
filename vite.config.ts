import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({

  test: {
    globals: true,  // Allow globals like `describe`, `it`, etc.
    environment: 'jsdom',  // Use jsdom as the test environment (browser-like)
    watch: true,  // Automatically re-run tests when code changes
    reporters: 'default',  // Output test results to console
  },
});