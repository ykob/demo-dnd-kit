import eslint from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import hooksPlugin from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';

export default [
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  eslintConfigPrettier,
  {
    ignores: ['dist', 'styled-system'],
  },
  {
    languageOptions: {
      parser: tseslint.parser
    },
    plugins: {
      'react-refresh': reactRefresh,
      'react-hooks': hooksPlugin,
    },
    rules: {
      ...hooksPlugin.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },
];
