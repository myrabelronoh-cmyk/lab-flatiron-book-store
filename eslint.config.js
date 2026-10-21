const js = require("@eslint/js");

module.exports = [
  {
    ignores: ["lab-flatiron-book-store/**"],
  },
  {
    files: ["script.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "script",
      globals: {
        document: "readonly",
        Intl: "readonly",
      },
    },
    rules: js.configs.recommended.rules,
  },
];
