module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["airbnb-base", "prettier"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["@typescript-eslint"],
  rules: {
    "no-console": "off",
    quotes: ["error", "double"],
    "import/no-unresolved": "off",
    "import/extensions": "off",
    "dot-notation": "off",
    "max-len": ["error", { code: 200 }],
  },
  ignorePatterns: ["dist/*", "node_modules/*s"],
};
