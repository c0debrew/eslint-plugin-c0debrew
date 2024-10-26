import eslint from "@eslint/js";
import prettierRecommended from "eslint-plugin-prettier/recommended";
import sonarjs from "eslint-plugin-sonarjs";
import tseslint from "typescript-eslint";

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.strictTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,
  sonarjs.configs.recommended,
  {
    languageOptions: {
      parserOptions: {
        project: true,
      },
    },
    rules: {
      "@typescript-eslint/consistent-type-definitions": ["error", "type"],
      "@typescript-eslint/require-array-sort-compare": "error",
      "@typescript-eslint/sort-type-constituents": "error",
      "sort-imports": "error",
      "sort-keys": "error",
      "sort-vars": "error",
    },
  },
  {
    ...tseslint.configs.disableTypeChecked,
    files: ["**/*.js", "**/*.cjs", "**/*.mjs"],
  },
  prettierRecommended,
);
