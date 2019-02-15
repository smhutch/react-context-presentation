import React from 'react'
import { ModalBackground, ModalWrapper } from './Styled'
import { CloseButton } from './Styled'

const Modal = ({ children, onClose }) => (
  <ModalBackground>
    <ModalWrapper>
      <CloseButton onClick={onClose}>&times;</CloseButton>
      {children}
    </ModalWrapper>
  </ModalBackground>
)

export default Modal