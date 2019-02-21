() => {
  class Demo extends React.Component {
    constructor() {
      super()

      this.state = {
        dog: null
      }
    }

    render() {
      return (
        <App>
          <Dogs onClick={dog => this.setState({ dog })} />
          {this.state.dog && (
            <Modal onClose={() => this.setState({ dog: null })}>
              <DogInfo {...this.state.dog} />
            </Modal>
          )}
        </App>
      )
    }
  }

  return <Demo />
}
