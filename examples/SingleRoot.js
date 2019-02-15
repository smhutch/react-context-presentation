Window.app = props => {
  const component = (
    <SomeContext>
      <Cart />
      <Checkout />
      <QuickOrder />
    </SomeContext>
  )

  render(component, document.getElementById('checkout-app'))
}