module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-prettier'],
  // add your custom config here
  // https://stylelint.io/user-guide/configuration
  plugins: ['stylelint-order', 'stylelint-scss'],
  rules: {
    'no-descending-specificity': null,
    'at-rule-no-unknown': null,
    'declaration-colon-space-after': 'always-single-line',
    'declaration-no-important': true,
    'function-no-unknown': null,
    'number-leading-zero': 'never',
    'order/properties-alphabetical-order': true,
    'selector-pseudo-element-no-unknown': [
      true,
      { ignorePseudoElements: ['v-deep'] }
    ],
    'value-keyword-case': ['lower', { camelCaseSvgKeywords: true }],
    indentation: [
      2,
      {
        baseIndentLevel: 1
      }
    ]
  },
  overrides: [
    {
      extends: 'stylelint-config-recommended-vue',
      files: '**/*.vue'
    },
    {
      extends: 'stylelint-config-standard-scss',
      files: '**/*.scss',
      rules: {
        'scss/at-rule-no-unknown': true
      }
    }
  ]
};
