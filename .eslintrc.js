module.exports = {
  extends: '@valtech-ch/eslint-config-react',
  rules: {
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link_'],
        specialLink: ['hrefLeft', 'hrefRight'],
        aspects: ['invalidHref', 'preferButton'],
      },
    ],
    'react/react-in-jsx-scope': 'off',
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error', { functions: false }],
  },
}
