import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    coverage: {
      provider: 'istanbul', // O 'v8', si prefieres usar v8 como proveedor de cobertura
      exclude: [
        '**/*.js',
        '**/*.ts',
        '**/*.stories.*',
        '**/*Svg.tsx',
        '**/types.ts',
        '.next/**',
        'public/**',
        'node_modules/**',
      ],
      reportOnFailure: true,
      thresholds: {
        statements: 50,
        branches: 50,
        functions: 50,
        lines: 50,
      },
    },
    environment: 'jsdom',
    exclude: ['**/node_modules/**', '.next/**', 'public/**'],
    setupFiles: ['./vitest.setup.ts'],
    globals: true,
  },
});
