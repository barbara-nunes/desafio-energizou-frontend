import { globalCss } from '@barbara-ignite-ui/react'

export const globalStyles = globalCss({
  '*': {
    boxSizing: 'border-box',
    padding: 0,
    margin: 0,
  },

  body: {
    backgroundColor: '$gray400',
    '-webkit-font-smoothing': 'antialiased',
  },
})