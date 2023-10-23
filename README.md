# stylelint-robw: Rules for consistent, quality CSS

This package provides rulesets and configuration that help engineers write high quality, maintainable styles.

## Approach

In order to accomplish this goal, the configuration enforces:

- Consistency (e.g., rule and declaration order)
- Modernity (e.g., modern standards like `scale` are preferred over deprecated CSS like `zoom`)
- Efficiency (e.g., no redundant rules or declarations)
- Performance (e.g.,prevent redraws when possible)

It prefers codebases that use native CSS features. It does not check Sass or Less, but does allow and expect a small number of useful PostCSS features that don't have widely supported native equivalents (auoprefixing, mixins, and nesting).

## Plugins

This package applies rules from the following plugins:

- [stylelint-config-standard](https://github.com/stylelint/stylelint-config-standard)
- [stylelint-css-modules](https://github.com/pascalduez/stylelint-config-css-modules)
- [stylelint-declaration-block-no-ignored-properties](https://github.com/kristerkari/stylelint-declaration-block-no-ignored-properties)
- [stylelint-high-performance-animation](https://github.com/kristerkari/stylelint-high-performance-animation)
- [stylelint-no-restricted-syntax](https://github.com/niksy/stylelint-no-restricted-syntax)
- [stylelint-order](https://github.com/hudochenkov/stylelint-order)\*
- [stylelint-use-nesting](https://github.com/csstools/stylelint-use-nesting)

**\*** _CSS rules are ordered conceptually, then alphabetically within concept. See the order list [here](https://github.com/robwierzbowski/stylelint-config-robw/blob/main/order.cjs)._

## Requirements

- [x] [Stylelint](https://stylelint.io/) 15+
- [x] PostCSS [Autoprefixer](https://github.com/postcss/autoprefixer)
- [x] If using mixins, [postcss-mixins](https://github.com/postcss/postcss-mixins)
- [x] A [CSS modules](https://vitejs.dev/guide/features.html#css-modules) tool

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
