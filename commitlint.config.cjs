module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      ['feat', 'fix', 'test', 'chore', 'refactor'], // Tipos permitidos
    ],
    'scope-empty': [2, 'never'],
  },
};
