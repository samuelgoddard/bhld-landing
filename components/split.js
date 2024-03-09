import React from 'react'
import { m } from 'framer-motion'

export function Split({ children, className, delay }) {
  let words = children.split(' ')
  return words.map((word, i) => {
    return (
      <span
        key={children + i}
        className={`block overflow-hidden mb-0 pb-0 ${className}`}
      >
        <m.span
          className={`block overflow-hidden will-change-transform`}
          initial={{ y: '150%' }}
          animate={{ y: '0%', transition: { duration: 0.6, ease: [0.83, 0, 0.17, 1] }}}
          exit={{ y: '150%', transition: { duration: 0.6, ease: [0.83, 0, 0.17, 1] }}}
        >{word + (i !== words.length - 1 ? '\u00A0' : '')}
        </m.span>
      </span>
    )
  })
}