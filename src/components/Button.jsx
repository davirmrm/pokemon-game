import React from 'react'

const Button = ({ text, icon, img, className = '', onClick }) => {
  return (
    <button
      className={`${img ? 'img--btn' : 'btn'} ${img ? 'img--btn' : 'btn'}--${icon ? 'icon' : 'text'} ${className}`}
      onClick={onClick}
    >
      {text || icon || img}
    </button>
  )
}

export default Button
