import baseConfig from '@hono/eslint-config'

export default [
  ...baseConfig,
  {
    rules: {
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          args: 'all',
          argsIgnorePattern: '^_|^val$',
          caughtErrors: 'all',
          caughtErrorsIgnorePattern: '^_|^val$',
          destructuredArrayIgnorePattern: '^_|^val$',
          varsIgnorePattern: '^_|^val$',
          ignoreRestSiblings: true,
        },
      ],
    },
  },
]
