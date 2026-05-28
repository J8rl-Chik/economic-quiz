import js from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier/flat';
import {defineConfig} from 'eslint/config';
import globals from 'globals';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs}'],
    plugins: {js},
    extends: ['js/recommended'],
    languageOptions: {
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node
      }
    },
    rules: {
      'lines-between-class-members': 'error',
      'no-unused-vars': [
        'error',
        {
          args: 'all',
          argsIgnorePattern: '^_'
        }
      ]
    }
  },
  eslintConfigPrettier
]);
