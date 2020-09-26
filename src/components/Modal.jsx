import React from 'react'
import PropTypes from 'prop-types'
import Portal from './Portal'
import { IcoFechar } from './Icones/Fechar'

const Modal = ({ children, open = false, close = {}, action }) => (
  <Portal name='modal'>
    {open ? (
      <div className='modal__background'>
        <div className='modal'>
          <button onClick={close} className='modal__close'>
            <IcoFechar />
          </button>

          <div className='modal__content'>
            <div className='modal__container'>
              <div>{children}</div>
            </div>
          </div>
          <div className='modal__action'>{action}</div>
        </div>
      </div>
    ) : null}
  </Portal>
)

Modal.propTypes = {
  children: PropTypes.node.isRequired
}

export default Modal
