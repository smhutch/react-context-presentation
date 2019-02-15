import React, { createContext } from 'react'
import Modal from './Modal'
import { AppWrapper, Container } from './Styled'

const {
  Consumer: ModalConsumer,
  Provider: ModalProvider
} = createContext()

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      modal: null
    }
  }

  render() {
    return (
      <AppWrapper>
        <Container>
          <ModalProvider value={{
            openModal: content => this.setState({ modal: content })
          }}>
            {this.props.children}
            {this.state.modal && (
              <Modal onClose={() => this.setState({ modal: null })}>
                {this.state.modal}
              </Modal>
            )}
          </ModalProvider>
        </Container>
      </AppWrapper>
    )
  }
}

export { App as default, ModalConsumer }