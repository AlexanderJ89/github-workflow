import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    rules: {
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
    },
  },

   // 🟢 Node.js-specifik fil (t.ex. din server)
  {
    files: ['src/server.js'], // Anpassa sökvägen om din fil ligger någon annanstans
    languageOptions: {
      ecmaVersion: 'latest',
      globals: globals.node, // 👈 Lägg till Node-globals (t.ex. process, __dirname)
      sourceType: 'module',
    },
  },
])
