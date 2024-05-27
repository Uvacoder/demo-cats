import * as stylex from '@stylexjs/stylex'
import { colors } from '@stylexjs/open-props/lib/colors.stylex'

// A constant can be used to avoid repeating the media query
const DARK = '@media (prefers-color-scheme: dark)'

export const defaultColors = stylex.defineVars({
  textColor: { default: colors.gray1, [DARK]: colors.indigo3 },
  buttonColor: { default: colors.green10, [DARK]: colors.blue11 },
})
