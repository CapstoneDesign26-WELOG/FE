import js from "@eslint/js";
import { defineConfig } from "eslint/config";
import pluginReact from "eslint-plugin-react";
import globals from "globals";

export default defineConfig([
  {
    ignores: ["dist"],
  },

  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parserOptions: {
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

  // 마지막에 사용자 규칙으로 덮어쓰기
  {
    settings: {
      react: {
        version: "detect",
      },
    },

    rules: {
      // React 17+ JSX Transform 대응
      "react/react-in-jsx-scope": "off",
      "react/jsx-uses-react": "off",

      // var 사용 금지
      "no-var": "error",

      // const 사용 권장
      "prefer-const": "error",

      // 템플릿 리터럴 권장
      "prefer-template": "warn",

      // 주석 대문자 시작
      "capitalized-comments": [
        "warn",
        "always",
        {
          ignoreConsecutiveComments: true,
          ignorePattern: "^[A-Z_]+$",
        },
      ],

      // 화살표 함수 권장
      "prefer-arrow-callback": "warn",

      // 불필요한 중괄호 제거
      "arrow-body-style": ["warn", "as-needed"],
    },
  },
]);
