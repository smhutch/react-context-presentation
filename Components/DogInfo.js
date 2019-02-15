import React from 'react'
import { DogInfoWrapper, DogInfoImage, DogInfoSummary } from './Styled'

const DogInfo = ({ emoji, name, src }) => (
  <DogInfoWrapper>
    <DogInfoImage src={src} />
    <DogInfoSummary>
      <span>{emoji}</span>
      <strong>{name}</strong>
      <span>{emoji}</span>
    </DogInfoSummary>
  </DogInfoWrapper>
)

export default DogInfo