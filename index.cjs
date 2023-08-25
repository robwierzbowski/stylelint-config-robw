const orderRules = require('./order.cjs');

const errorMessages = {
  notForWebDocuments: property =>
    `The \`${property}\` property is not meant for use in web documents`,
  noFloats: property =>
    `Use a modern layout algorithm instead of \`${property}\`. In cases where float layouts are the best choice, please disable this rule per line.`,
  nonStandardProperty: property =>
    `\`${property}\` is a non-standard property. Please replace with a standards equivalent (for example, use transform: scale() instead of zoom).`,
};

// Core rules not set in the standard config
const coreRules = {
  'at-rule-no-unknown': [
    true,
    {
      // Allow postcss-mixin's mixin's at-rules
      // TODO: Write a plugin that checks for correct usage of the keywords,
      // similar to stylelint-scss. It looks like that doesn't exist
      // currently:
      // https://github.com/stylelint/stylelint/issues/2600#issuecomment-304978387
      ignoreAtRules: ['define-mixin', 'mixin'],
    },
  ],
  'color-named': 'never',
  'declaration-no-important': true,
  // An excellent rule to prevent some bad habits for perf and maintenance
  'declaration-property-value-disallowed-list': {
    '/^background/': ['http:', 'https:'],
    '/^transition/': ['/all/'],
  },
  'declaration-property-value-no-unknown': true,
  'function-url-no-scheme-relative': true,
  'length-zero-no-unit': true,
  // An arbitrary rule to try to keep styles more maintainable
  'max-nesting-depth': 4,
  'media-feature-name-value-no-unknown': true,
  'no-unknown-animations': true,
  'no-unknown-custom-properties': true,
  'rule-empty-line-before': [
    'always-multi-line',
    {
      except: ['first-nested'],
      ignore: ['after-comment', 'inside-block'],
    },
  ],
  // An arbitrary rule to try to keep styles more maintainable
  'selector-max-compound-selectors': 5,
  'selector-max-id': 0,
  // An arbitrary rule to try to keep styles more maintainable
  'selector-max-specificity': '0,4,0',
  'selector-max-universal': 1,
  'selector-no-qualifying-type': true,
  'selector-pseudo-class-no-unknown': [
    true,
    {
      // Allow CSS module's :global pseudo class
      ignorePseudoClasses: ['global'],
    },
  ],
};

const cssModulesRules = {
  'css-modules/composed-class-names': true,
  'css-modules/css-variables': true,
};

const highPerformanceAnimationRules = {
  'plugin/no-low-performance-animation-properties': true,
};

// This should be a great way to prevent unused cruft in CSS files, but I'm
// curious to see how well it works. The relationships that need to be
// documented are pretty complex.
const noIgnoredPropertiesRules = {
  'plugin/declaration-block-no-ignored-properties': true,
};

const noRestrictedSyntaxRules = {
  'plugin/no-restricted-syntax': [
    [
      {
        selector: "decl[prop='direction']",
        message: errorMessages.notForWebDocuments,
      },
      {
        selector: "decl[prop='unicode-bidi']",
        message: errorMessages.notForWebDocuments,
      },
      {
        selector: "decl[prop='clear']",
        message: errorMessages.noFloats,
      },
      {
        selector: "decl[prop='float']",
        message: errorMessages.noFloats,
      },
      {
        selector: "decl[prop='max-zoom']",
        message: errorMessages.nonStandardProperty,
      },
      {
        selector: "decl[prop='min-zoom']",
        message: errorMessages.nonStandardProperty,
      },
      {
        selector: "decl[prop='user-zoom']",
        message: errorMessages.nonStandardProperty,
      },
      {
        selector: "decl[prop='zoom']",
        message: errorMessages.nonStandardProperty,
      },
    ],
  ],
};

const useNestingRules = {
  'csstools/use-nesting': true,
};

const config = {
  extends: ['stylelint-config-standard'],
  plugins: [
    'stylelint-css-modules',
    'stylelint-declaration-block-no-ignored-properties',
    'stylelint-high-performance-animation',
    'stylelint-no-restricted-syntax',
    'stylelint-order',
    'stylelint-use-nesting',
  ],
  reportDescriptionlessDisables: true,
  reportInvalidScopeDisables: true,
  reportNeedlessDisables: true,
  rules: {
    ...coreRules,
    ...cssModulesRules,
    ...highPerformanceAnimationRules,
    ...noIgnoredPropertiesRules,
    ...noRestrictedSyntaxRules,
    ...orderRules,
    ...useNestingRules,
  },
};

module.exports = config;
