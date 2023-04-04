import NavBar from './components/Navbar.js'
import CartContainer from './components/CartContainer.js'
import { useDispatch, useSelector } from 'react-redux'
import { calculateTotals, getCartItems } from './features/cart/cartSlice'
import { useEffect } from 'react'
import Modal from './components/Modal'

function App () {
  const dispach = useDispatch()
  const { cartItems } = useSelector(state => state.cart)
  const { isOpen, isLoading } = useSelector(state => state.modal)

  useEffect(() => {
    dispach(calculateTotals())
  }, [cartItems])
  useEffect(() => {
    dispach(getCartItems())
  }, [])

  if (isLoading) {
    return (
      <div className='loading'>
        <h1>Loading...</h1>
      </div>
    )
  }

  return (
    <main>
      {isOpen && <Modal />}
      <NavBar />
      <CartContainer />
    </main>
  )
}
export default App
