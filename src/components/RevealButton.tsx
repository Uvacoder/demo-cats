'use client'

import stylex from '@stylexjs/stylex'
import { fonts } from '@stylexjs/open-props/lib/fonts.stylex'
import { sizes } from '@stylexjs/open-props/lib/sizes.stylex'
import { borders } from '@stylexjs/open-props/lib/borders.stylex'
import { useState } from 'react'
import { defaultColors } from '../app/tokens.stylex'

const styles = stylex.create({
  catName: {
    fontSize: sizes.spacing7,
    lineHeight: sizes.spacing7,
    fontWeight: fonts.weight7,
    fontFamily: 'Arial, Helvetica, sans-serif',
  },
  button: {
    paddingTop: sizes.spacing00,
    paddingBottom: sizes.spacing00,
    paddingLeft: sizes.spacing3,
    paddingRight: sizes.spacing3,
    borderRadius: borders.radius3,
    border: 0,
    fontSize: fonts.size4,
    lineHeight: fonts.lineHeight5,
    fontWeight: fonts.weight7,
    color: defaultColors.textColor,
    backgroundColor: defaultColors.buttonColor,
  },
})
export function RevealButton(props: { catName: string }) {
  const [revealed, setRevealed] = useState(false)
  if (revealed) {
    return <h1 {...stylex.props(styles.catName)}>{props.catName}</h1>
  }

  return (
    <button {...stylex.props(styles.button)} onClick={() => setRevealed(true)}>
      Reveal
    </button>
  )
}
