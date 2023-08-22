// To work with the new flat config, the TypeScript parser module must be
// imported as a single object
// eslint-disable-next-line import/no-namespace
import * as typescriptParser from '@typescript-eslint/parser';
import prettierConfig from 'eslint-config-prettier';
import { robBnBConfig } from 'eslint-robbnb';
import globals from 'globals';

const languageOptions = {
  globals: {
    ...globals.node,
    ...globals.es2021,
  },
  // For reduced complexity we can ignore Babel and use
  // @typescript-eslint/parser to parse both TS and JS files
  parser: typescriptParser,
  parserOptions: {
    project: './tsconfig.json',
    sourceType: 'module',
    tsconfigRootDir: '.',
  },
};

const config = [
  ...robBnBConfig,

  {
    files: ['**/*.js', '**/*.ts'],
    languageOptions,
    linterOptions: {
      // Log a warning when eslint-disable comments exist for inactive rules
      reportUnusedDisableDirectives: true,
    },
  },

  prettierConfig,
];

// eslint-disable-next-line import/no-default-export
export default config;
