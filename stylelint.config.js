module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-prettier'],
  // add your custom config here
  // https://stylelint.io/user-guide/configuration
  plugins: ['stylelint-order', 'stylelint-scss'],
  rules: {
    'no-descending-specificity': null,
    'at-rule-no-unknown': null,
    'declaration-no-important': true,
    'order/properties-alphabetical-order': true,
    'scss/at-rule-no-unknown': true,
    'selector-pseudo-element-no-unknown': [
      true,
      { ignorePseudoElements: ['v-deep'] }
    ]
  }
};
