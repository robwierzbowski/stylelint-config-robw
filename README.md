# stylelint-robw: Rules for consistent, quality CSS

This package provides linter configuration and rulesets that help engineers write high quality, consistent, and maintainable styles.

## Approach

This configuration aims to make CSS across an application consistent, easily understandable, and free from common, hard to find errors and redundancy. It prefers codebases that use native CSS features — it does not check Sass or Less, but does allow and expect a small number of useful PostCSS features that don't have widely supported native equivalents (auoprefixing, mixins, and nesting).

## Plugins

This package applies rules from the following plugins:

- [stylelint-config-standard](https://github.com/stylelint/stylelint-config-standard)
- [stylelint-css-modules](https://github.com/pascalduez/stylelint-config-css-modules)
- [stylelint-declaration-block-no-ignored-properties](https://github.com/kristerkari/stylelint-declaration-block-no-ignored-properties)
- [stylelint-high-performance-animation](https://github.com/kristerkari/stylelint-high-performance-animation)
- [stylelint-no-restricted-syntax](https://github.com/niksy/stylelint-no-restricted-syntax)
- [stylelint-order](https://github.com/hudochenkov/stylelint-order)
- [stylelint-use-nesting](https://github.com/csstools/stylelint-use-nesting)

CSS rules are ordered conceptually, then alphabetically within concept. See the list [here](https://github.com/robwierzbowski/stylelint-config-robw/blob/main/order.cjs).

## Requirements

- [x] [Stylelint](https://stylelint.io/) 15+
- [x] PostCSS [Autoprefixer](https://github.com/postcss/autoprefixer)
- [x] If using mixins, [postcss-mixins](https://github.com/postcss/postcss-mixins)

## Installation

Install the package and its peer dependencies.

```sh
npm install stylelint-config-robw stylelint@^15
```

## Usage

Add the config to your stylelint.config.mjs:

```js
const config = {
  customSyntax: 'postcss',
  extends: ['stylelint-config-robw'],
};

export default config;
```
