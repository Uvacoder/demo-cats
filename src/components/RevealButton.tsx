'use client'

import { useState } from 'react'

export function RevealButton(props: { catName: string }) {
  const [revealed, setRevealed] = useState(false)
  if (revealed) {
    return <h1 className='text-4xl font-bold'>{props.catName}</h1>
  }

  return (
    <button className='text-2xl font-bold bg-green-700 py-2 px-4 rounded-lg' onClick={() => setRevealed(true)}>
      Reveal
    </button>
  )
}
