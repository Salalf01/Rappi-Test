module.exports = {
  extends: [
    'react-app',
    'eslint:recommended',
    'plugin:react/recommended',
    'eslint-config-prettier',
  ],
  rules: {
    indent: ['error', 2],
    semi: [2, 'always'],
    'no-console': ['error', { allow: ['warn', 'error', 'log'] }],
    'react/require-default-props': [2, { forbidDefaultForRequired: true }],
    'react/no-unused-prop-types': [2],
  },
};
