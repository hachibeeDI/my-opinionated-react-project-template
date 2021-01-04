// based on: https://www.robertcooper.me/using-eslint-and-prettier-in-a-typescript-project
module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['react-hooks'],
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',

    'plugin:import/errors',
    'plugin:import/typescript',

    // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    'prettier/@typescript-eslint',
    // Enables eslint-plugin-prettier and eslint-config-prettier.
    // This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecaFeatures: {
      jsx: true,
    },
  },
  rules: {
    curly: 'error',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'none',
        ignoreRestSiblings: true,
      },
    ],

    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',

    'react/prop-types': 'off',

    'import/named': 'off',
    'import/no-default-export': 'off',
    'import/default': 'off',
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', ['index', 'parent', 'sibling']],
        'newlines-between': 'always',
      },
    ],

    // this rule is useless for many cases
    'react/display-name': 'off',

    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': [
      'warn',
      {
        additionalHooks: 'useRecoilCallback|useTranslation',
      },
    ],
  },
  settings: {
    react: {
      version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },

    'import/resolver': 'webpack',
  },
};
