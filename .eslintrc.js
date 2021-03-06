module.exports = {
  'extends': [
    'airbnb',
    'prettier',
    'prettier/react'
  ],
  'parser': 'babel-eslint',
  'parserOptions': {
    'ecmaVersion': 8,
    'ecmaFeatures': {
      'impliedStrict': true,
    }
  },
  root: true,
  'env': {
    'browser': true,
    'node': true,
    'jest': true
  },
  'rules': {
    'react/jsx-filename-extension': [
      1,
      {
        'extensions': [
          '.js',
          '.jsx'
        ]
      }
    ],
    "no-return-assign": [ 2, "except-parens" ],
    "no-param-reassign": 0,
    'jsx-a11y/no-static-element-interactions': 'off',
    'quotes': [
      2,
      'single',
      {
        'avoidEscape': true,
        'allowTemplateLiterals': true
      }
    ],
    'react/no-array-index-key': 'off',
    'prettier/prettier': [
      'error',
      {
        'trailingComma': 'es5',
        'singleQuote': true,
      }
    ]
  },
  'plugins': [
    'react',
    'prettier'
  ]
};
