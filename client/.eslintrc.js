module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:react/recommended", "standard"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    semi: "off",
    indent: "off",
    "space-before-function-paren": "off",
    quotes: "off",
    "comma-dangle": "off",
    "multiline-ternary": "off",
  },
};
