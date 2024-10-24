import {definePreset} from 'unocss'

import {possibleColorScales} from './index'

// possible themes: gray, mauve, slate, sage, olive, sand, tomato, red, ruby, crimson, pink, plum, purple, violet, iris, indigo, blue, cyan, teal, jade, green, grass, bronze, gold, brown, orange, amber, yellow, lime, mint
// level: 1 to 12


// text color regex: format: text-{theme}{level}
const textColorRegex = /^text-(gray|mauve|slate|sage|olive|sand|tomato|red|ruby|crimson|pink|plum|purple|violet|iris|indigo|blue|cyan|teal|jade|green|grass|bronze|gold|brown|orange|amber|yellow|lime|mint)([1-9]|10|11|12)$/
const bgColorRegex = /^bg-(gray|mauve|slate|sage|olive|sand|tomato|red|ruby|crimson|pink|plum|purple|violet|iris|indigo|blue|cyan|teal|jade|green|grass|bronze|gold|brown|orange|amber|yellow|lime|mint)([1-9]|10|11|12)$/
const borderColorRegex = /^border-(gray|mauve|slate|sage|olive|sand|tomato|red|ruby|crimson|pink|plum|purple|violet|iris|indigo|blue|cyan|teal|jade|green|grass|bronze|gold|brown|orange|amber|yellow|lime|mint)([1-9]|10|11|12)$/

// black white alphas: text-(black|white)a(1-12)
const textColorAlphaRegex = /^text-(black|white)a([1-9]|10|11|12)$/

export default definePreset(() => {
  return {
    name: "colors",
    rules: [
      [textColorRegex, (match) => ({
        color: `var(--${match[1]}-${match[2]})`
      })],
      [bgColorRegex, (match) => ({
        'background-color': `var(--${match[1]}-${match[2]})`
      })],
      [borderColorRegex, (match) => ({
        'border-color': `var(--${match[1]}-${match[2]})`
      })],

      [textColorAlphaRegex, (match) => ({
        color: `var(--${match[1]}-a${match[2]})`
      })],

      ["text-black", {
        'color': 'black'
      }],
      ["text-white", {
        'color': 'white'
      }],

      ["bg-inherit", {
        'background-color': 'inherit'
      }]
    ],
    autocomplete: {
      templates: [
        "text-<color><level>",
        "text-(black|white)a<level>",
        "bg-<color><level>",
        "border-<color><level>"
      ],
      shorthands: {
        'color': possibleColorScales,
        'level': "(1|2|3|4|5|6|7|8|9|10|11|12)"
      }
    }
  }
})