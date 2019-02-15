Window.quickOrderApp = props => {
  const component = (
    <SomeContext>
      <QuickOrder />
    </SomeContext>
  )
  
  render(component, document.getElementById('quick-order-app'))
}

Window.cart = props => {
  const component = (
    <SomeContext>
      <Cart />
    </SomeContext>
  )
  
  render(component, document.getElementById('cart-app'))
}

Window.checkout = props => {
  const component = (
    <SomeContext>
      <Checkout />
    </SomeContext>
  )
  
  render(component, document.getElementById('checkout-app'))
}