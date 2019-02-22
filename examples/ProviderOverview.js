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
