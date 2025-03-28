import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
];

const prettierConfig = [...compat.extends('plugin:prettier/recommended')];

const tailwindConfig = [...compat.extends('plugin:tailwindcss/recommended')];

const config = [...eslintConfig, ...prettierConfig, ...tailwindConfig];

export default config;
