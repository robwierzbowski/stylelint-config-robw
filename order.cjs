const orderRules = {
  'order/order': [
    [
      'custom-properties',
      'at-rules',
      'declarations',

      // Nested variants of base rules
      {
        type: 'at-rule',
        name: 'supports',
      },
      {
        type: 'at-rule',
        name: 'media',
      },
      'rules',
    ],
  ],

  // Ordered conceptually, then alphabetically within concept.
  // https://github.com/hudochenkov/stylelint-config-hudochenkov/blob/master/order.js
  // and https://github.com/stormwarning/stylelint-config-recess-order used as
  // references for properties.
  'order/properties-order': [
    [
      'all',

      // Position and layout
      'position',
      'inset',
      'inset-block',
      'inset-block-end',
      'inset-block-start',
      'inset-inline',
      'inset-inline-end',
      'inset-inline-start',
      'isolation',
      'top',
      'right',
      'bottom',
      'left',
      'z-index',

      'position',
      'inset',

      'display',
      'vertical-align',

      'flex',
      'flex-basis',
      'flex-direction',
      'flex-flow',
      'flex-grow',
      'flex-shrink',
      'flex-wrap',

      'grid',
      'grid-area',
      'grid-template',
      'grid-template-areas',
      'grid-template-rows',
      'grid-template-columns',
      'grid-column',
      'grid-column-start',
      'grid-column-end',
      'grid-row',
      'grid-row-start',
      'grid-row-end',
      'grid-auto-flow',
      'grid-auto-columns',
      'grid-auto-rows',
      'grid-gap',
      'grid-row-gap',
      'grid-column-gap',
      'gap',
      'column-gap',
      'row-gap',

      'align-content',
      'align-items',
      'align-self',
      'justify-content',
      'justify-items',
      'justify-self',
      'place-content',
      'place-items',
      'place-self',
      'order',

      'float',
      'clear',

      'clip',
      'clip-path',
      'overflow',
      'overflow-block',
      'overflow-inline',
      'overflow-scrolling',
      'overflow-x',
      'overflow-y',
      'overscroll-behavior',
      'overscroll-behavior-block',
      'overscroll-behavior-inline',
      'overscroll-behavior-x',
      'overscroll-behavior-y',
      'object-fit',
      'object-position',

      // Box, ordered from outside-in
      'box-sizing',

      'margin',
      'margin-block',
      'margin-inline',
      'margin-top',
      'margin-right',
      'margin-bottom',
      'margin-left',

      'border',
      'border-collapse',
      'border-color',
      'border-style',
      'border-width',
      'border-block',
      'border-block-start',
      'border-block-start-color',
      'border-block-start-style',
      'border-block-start-width',
      'border-block-end',
      'border-block-end-color',
      'border-block-end-style',
      'border-block-end-width',
      'border-inline',
      'border-inline-start',
      'border-inline-start-color',
      'border-inline-start-style',
      'border-inline-start-width',
      'border-inline-end',
      'border-inline-end-color',
      'border-inline-end-style',
      'border-inline-end-width',
      'border-top',
      'border-top-color',
      'border-top-style',
      'border-top-width',
      'border-right',
      'border-right-color',
      'border-right-style',
      'border-right-width',
      'border-bottom',
      'border-bottom-color',
      'border-bottom-style',
      'border-bottom-width',
      'border-left',
      'border-left-color',
      'border-left-style',
      'border-left-width',
      'border-radius',
      'border-start-start-radius',
      'border-start-end-radius',
      'border-end-start-radius',
      'border-end-end-radius',
      'border-top-left-radius',
      'border-top-right-radius',
      'border-bottom-right-radius',
      'border-bottom-left-radius',
      'border-image',
      'border-image-source',
      'border-image-slice',
      'border-image-width',
      'border-image-outset',
      'border-image-repeat',
      'border-top-image',
      'border-right-image',
      'border-bottom-image',
      'border-left-image',
      'border-corner-image',
      'border-top-left-image',
      'border-top-right-image',
      'border-bottom-right-image',
      'border-bottom-left-image',

      'outline',
      'outline-color',
      'outline-offset',
      'outline-style',
      'outline-width',

      'padding',
      'padding-inline',
      'padding-block',
      'padding-top',
      'padding-right',
      'padding-bottom',
      'padding-left',

      'width',
      'max-width',
      'min-width',
      'height',
      'max-height',
      'min-height',
      'inline-size',
      'min-inline-size',
      'max-inline-size',
      'aspect-ratio',

      'backdrop-filter',
      'background',
      'background-attachment',
      'background-blend-mode',
      'background-clip',
      'background-color',
      'background-image',
      'background-origin',
      'background-position',
      'background-position-x',
      'background-position-y',
      'background-repeat',
      'background-size',
      'box-decoration-break',
      'box-shadow',

      // Content
      'table-layout',
      'caption-side',
      'empty-cells',

      'list-style',
      'list-style-position',
      'list-style-type',
      'list-style-image',
      'counter-increment',
      'counter-reset',

      // Font and font definition
      'ascent-override',
      'descent-override',
      'color',
      'content',
      'hyphens',
      'interpolation-mode',

      'font',
      'font-display',
      'font-effect',
      'font-emphasize',
      'font-emphasize-position',
      'font-emphasize-style',
      'font-family',
      'font-feature-settings',
      'font-kerning',
      'font-optical-sizing',
      'font-size',
      'font-size-adjust',
      'font-smoothing',
      'font-stretch',
      'font-style',
      'font-variant',
      'font-variant-alternates',
      'font-variant-caps',
      'font-variant-east-asian',
      'font-variant-ligatures',
      'font-variant-numeric',
      'font-variant-position',
      'font-variation-settings',
      'font-weight',
      'font-family',
      'font-size',
      'font-size-adjust',
      'font-stretch',
      'font-style',
      'font-weight',

      'letter-spacing',
      'line-gap-override',
      'line-height',
      'overflow-wrap',
      'quotes',
      'size-adjust',
      'src',
      'tab-size',
      'unicode-range',

      'text-align',
      'text-align-last',
      'text-decoration',
      'text-decoration-color',
      'text-decoration-line',
      'text-decoration-style',
      'text-decoration-thickness',
      'text-emphasis',
      'text-emphasis-color',
      'text-emphasis-position',
      'text-emphasis-style',
      'text-indent',
      'text-justify',
      'text-outline',
      'text-overflow',
      'text-overflow-ellipsis',
      'text-overflow-mode',
      'text-shadow',
      'text-transform',
      'text-underline-offset',
      'text-underline-position',
      'text-wrap',

      'white-space',
      'word-break',
      'word-wrap',

      // Controls and browser integrations
      'accent-color',
      'appearance',
      'caret-color',
      'color-scheme',
      'cursor',
      'pointer-events',
      'resize',
      'touch-action',
      'user-select',

      // Visual-only alterations
      'scale',
      'translate',
      'filter',
      'mix-blend-mode',
      'opacity',
      'rotate',
      'transform',
      'transform-origin',
      'visibility',

      // Motion
      'transition',
      'transition-delay',
      'transition-duration',
      'transition-property',
      'transition-timing-function',

      'animation',
      'animation-name',
      'animation-delay',
      'animation-direction',
      'animation-duration',
      'animation-fill-mode',
      'animation-iteration-count',
      'animation-play-state',
      'animation-timing-function',

      // SVG
      'alignment-baseline',
      'baseline-shift',
      'color-interpolation',
      'color-interpolation-filters',
      'color-profile',
      'color-rendering',
      'dominant-baseline',
      'fill',
      'fill-opacity',
      'fill-rule',
      'flood-color',
      'flood-opacity',
      'image-rendering',
      'lighting-color',
      'marker-end',
      'marker-mid',
      'marker-start',
      'mask',
      'shape-rendering',
      'stop-color',
      'stop-opacity',
      'stroke',
      'stroke-dasharray',
      'stroke-dashoffset',
      'stroke-linecap',
      'stroke-linejoin',
      'stroke-miterlimit',
      'stroke-opacity',
      'stroke-width',
      'text-anchor',
      'word-spacing',
      'writing-mode',

      // Print
      'columns',
      'column-count',
      'column-fill',
      'column-gap',
      'column-rule',
      'column-rule-color',
      'column-rule-style',
      'column-rule-width',
      'column-span',
      'column-width',
      'break-before',
      'break-inside',
      'break-after',
      'page-break-before',
      'page-break-inside',
      'page-break-after',
      'orphans',
      'widows',
    ],
  ],
};

module.exports = orderRules;
