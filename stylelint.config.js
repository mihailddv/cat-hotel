module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-prettier'],
  // add your custom config here
  // https://stylelint.io/user-guide/configuration
  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['extends', 'extend', 'ignores', 'mixin', 'include'],
      },
    ],
    'number-leading-zero': null,
    'selector-pseudo-element-colon-notation': 'single',
    'selector-combinator-space-after': 'never',
    'no-missing-end-of-source-newline': null,
    // 'unit-whitelist': ['em', 'rem', 's', 'px', '%', 'vh', 'fr', 'deg', 'vw'],
  },
}
