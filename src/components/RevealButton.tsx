'use client'

import stylex from '@stylexjs/stylex'
import { colors } from '@stylexjs/open-props/lib/colors.stylex'
import { fonts } from '@stylexjs/open-props/lib/fonts.stylex'
import { useState } from 'react'
import { defaultColors } from '../app/tokens.stylex'

const styles = stylex.create({
  catName: {
    fontSize: '2.25rem',
    lineHeight: '2.5rem',
    fontWeight: fonts.weight7,
    fontFamily: 'Arial, Helvetica, sans-serif',
  },
  button: {
    paddingTop: '0.25rem',
    paddingBottom: '0.25rem',
    paddingLeft: '1rem',
    paddingRight: '1rem',
    borderRadius: '0.5rem',
    border: 0,
    fontSize: '1.5rem',
    lineHeight: '2rem',
    fontWeight: 700,
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
