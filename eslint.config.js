import js from "@eslint/js";
import { defineConfig, globalIgnores } from "eslint/config";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import eslintConfigPrettier from 'eslint-config-prettier';
import pluginReact from 'eslint-plugin-react';
import globals from "globals";

export default defineConfig([
  {
    ignores: ['dist'],
  },
  {
    files: ["**/*.{js,jsx}"],
    extends: [
      js.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        ecmaVersion: "latest",
        ecmaFeatures: { jsx: true },
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: globals.browser,
    },
    extends: [js.configs.recommended],
  },

  // React 권장 규칙
  pluginReact.configs.flat.recommended,

  // 사용자 커스텀 규칙
  {
    settings: {
      react: {
        version: 'detect',
      },
    },

    rules: {
      "no-unused-vars": ["error", { varsIgnorePattern: "^[A-Z_]" }],
    },
  },
      // React 17+ JSX Transform 대응
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'off',

      // var 사용 금지
      'no-var': 'error',

      // const 사용 권장
      'prefer-const': 'error',

      // 문자열 결합 시 템플릿 리터럴 권장
      'prefer-template': 'warn',

      // 주석은 대문자로 시작하도록 권장
      'capitalized-comments': [
        'warn',
        'always',
        {
          ignoreConsecutiveComments: true,
          ignorePattern: '^[A-Z_]+$',
        },
      ],

      // 콜백 함수는 화살표 함수 사용 권장
      'prefer-arrow-callback': 'warn',

      // 불필요한 중괄호 제거
      'arrow-body-style': ['warn', 'as-needed'],
    },
  },

  // Prettier와 충돌하는 ESLint 규칙 비활성화
  eslintConfigPrettier,
]);
