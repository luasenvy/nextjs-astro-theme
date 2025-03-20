import { fixupConfigRules, fixupPluginRules } from "@eslint/compat";
import tslintPlugin from "@typescript-eslint/eslint-plugin";
import importPlugin from "eslint-plugin-import";
import prettier from "eslint-plugin-prettier";
import tsParser from "@typescript-eslint/parser";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import jslint from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const compat = new FlatCompat({
  baseDirectory: dirname(fileURLToPath(import.meta.url)),
  recommendedConfig: jslint.configs.recommended,
  allConfig: jslint.configs.all,
});

export default [
  {
    ignores: ["**/node_modules", "**/build", "**/coverage"],
  },
  ...fixupConfigRules(
    compat.extends("plugin:@typescript-eslint/recommended", "plugin:import/typescript", "prettier")
  ),
  {
    plugins: {
      "@typescript-eslint": fixupPluginRules(tslintPlugin),
      import: fixupPluginRules(importPlugin),
      prettier,
    },

    languageOptions: {
      parser: tsParser,
    },

    rules: {
      "@typescript-eslint/no-unused-vars": "warn",
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/ban-ts-comment": "warn",
      "@typescript-eslint/consistent-type-imports": "error",

      "prettier/prettier": [
        "error",
        {
          trailingComma: "es5",
          semi: true,
          singleQuote: false,
          printWidth: 100,
          plugins: ["prettier-plugin-tailwindcss"],
        },
      ],
    },
  },
  {
    files: ["**/*.+(ts|tsx)"],

    rules: {
      "import/order": [
        "error",
        {
          "newlines-between": "always-and-inside-groups",

          alphabetize: {
            order: "asc",
          },
        },
      ],

      "sort-imports": [
        "error",
        {
          ignoreDeclarationSort: true,
        },
      ],
    },
  },
];
