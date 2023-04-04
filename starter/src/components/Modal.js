import React from 'react'
import { closeModal, openModal } from '../features/modal/modalSlice'
import { clearCart } from '../features/cart/cartSlice'
import { useDispatch } from 'react-redux'
const Modal = () => {
  const dispach = useDispatch()
  return (
    <aside className='modal-container'>
      <div className='modal'>
        <h4>Remove all our items from card ?</h4>
        <button
          type='button'
          className='btn confirm-btn'
          onClick={() => {
            dispach(clearCart())
            dispach(closeModal())
          }}
        >
          confirm
        </button>
        <button
          type='button'
          className='btn clear-btn'
          onClick={() => dispach(closeModal())}
        >
          cancel
        </button>
      </div>
    </aside>
  )
}

export default Modal
