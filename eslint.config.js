import eslint from '@eslint/js';
import tseslint from '@typescript-eslint';
import eslintConfigPrettier from 'eslint-config-prettier';
import hooksPlugin from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';

export default [
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  eslintConfigPrettier,
  {
    ignores: ['dist', 'styled-system', '.eslintrc.cjs'],
  },
  {
    languageOptions: {
      parser: '@typescript-eslint/parser',
    },
    plugins: {
      'react-refresh': reactRefresh,
      'react-hooks': hooksPlugin,
    },
    rules: {
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },
];
