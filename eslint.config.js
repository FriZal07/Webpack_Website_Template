import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";


/// Write your coding rules here
export default defineConfig([
  { files: ["**/*.{js,mjs,cjs}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: { globals: globals.browser } },
]);
