import React from 'react'
import { dogs } from '../data'
import DogInfo from './DogInfo'
import { DogImage, DogGrid } from './Styled'

import { ModalConsumer } from './App'

const Dogs = props => (
  <ModalConsumer>
    {context => (
      <DogGrid>
        {dogs.map(dog => (
          <DogImage
            key={dog.src}
            src={dog.src}
            onClick={() => {
              // Overly complex to show both variations.
              // In reality, you would use one of these.
              if (props.onClick) {
                props.onClick(dog)
              } else {
                context.openModal(<DogInfo {...dog} />)
              }
            }}
          />
        )
        )}
      </DogGrid>
    )}
  </ModalConsumer>
)

export default Dogs
