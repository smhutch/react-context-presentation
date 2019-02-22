const { Provider, Consumer} = React.createContext()

const Demo = props => (
  <Provider value={{
    addresses: [],
    name: 'Herman Mule',
    email: 'herman@mule.com',
    measurement_system: 'metric'
  }}>
    <Cart />
    <Checkout />
    <Settings />
  </Provider>
)

const Checkout = props => (
  <>
    <Summary />
    <Address />
    <Payment />
    <SubmitButton />
  </>
)

const Address = props => (
  <>
    <NameField />
    <EmailField />
    <AddressForm />
  </>
)

const EmailField = props => (
  <Consumer>
    {context => <Field value={context.email} />}
  </Consumer>
)
