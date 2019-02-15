import { swiss } from 'mdx-deck/themes'
import syntax from 'react-syntax-highlighter/styles/prism/okaidia'

export const deck = {
  ...swiss,
  monospace: 'Fira Code',
  prism: {
    style: syntax
  }
}
