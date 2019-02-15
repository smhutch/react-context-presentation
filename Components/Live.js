import React from 'react'
import { LiveCode } from 'mdx-deck-live-code'

const Live = ({ scope, ...props }) => (
  <LiveCode
    providerProps={{
      mountStylesheet: false,
      scope
    }}
    editorProps={{
      style: {
        background: '#1e3149',
        color: 'white',
        margin: '0',
        padding: '1rem',
        fontFamily: 'Fira code',
        fontSize: '1.2rem'
      }
    }}
    size="fullscreen"
    {...props}
  />
)

export default Live
