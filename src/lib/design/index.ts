export const possibleColorScales = [
    "gray",
    "mauve",
    "slate",
    "sage",
    "olive",
    "sand",
    "tomato",
    "red",
    "ruby",
    "crimson",
    "pink",
    "plum",
    "purple",
    "violet",
    "iris",
    "indigo",
    "blue",
    "cyan",
    "teal",
    "jade",
    "green",
    "grass",
    "bronze",
    "gold",
    "brown",
    "orange",
    "amber",
    "yellow",
    "lime",
    "mint"
  ]
  
  export function buildRegex(prefix: string) {
    return new RegExp(`^${prefix}-(gray|mauve|slate|sage|olive|sand|tomato|red|ruby|crimson|pink|plum|purple|violet|iris|indigo|blue|cyan|teal|jade|green|grass|bronze|gold|brown|orange|amber|yellow|lime|mint)$`)
  }