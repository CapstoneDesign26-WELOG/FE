import js from '@eslint/js';
import { defineConfig } from 'eslint/config';
import eslintConfigPrettier from 'eslint-config-prettier';
import pluginReact from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import globals from 'globals';

export default defineConfig([
  // 무시할 폴더
  {
    ignores: ['dist', 'src/shared/assets/svgs'],
  },

  // 기본 설정
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: globals.browser,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    extends: [
      js.configs.recommended,
      pluginReact.configs.flat.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
      eslintConfigPrettier,
    ],
    rules: {
      // React 17+ JSX Transform
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'off',

      // 미사용 변수 허용 패턴
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],

      // 코드 스타일
      'no-var': 'error',
      'prefer-const': 'error',
      'prefer-template': 'warn',
      'prefer-arrow-callback': 'warn',
      'arrow-body-style': ['warn', 'as-needed'],

      'capitalized-comments': [
        'warn',
        'always',
        {
          ignoreConsecutiveComments: true,
          ignorePattern: '^[A-Z_]+$',
        },
      ],
    },
  },
]);
