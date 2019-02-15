import React from 'react'
import { CodeSurfer } from 'mdx-deck-code-surfer'
import dracula from 'prism-react-renderer/themes/dracula'

const Surfer = props => (
  <CodeSurfer
    theme={dracula}
    lang="javascript"
    showNumbers
    {...props}
  />
)

export default Surfer
