import React from 'react'

const TextInput = ({ className = '', label = '', placeholder = '', name = '', value = '', onChange, onBlur }) => {
  return (
    <div className={`${className} input__container`}>
      {label && <label className='input__label'>{label}</label>}
      <input
        className='input'
        type='text'
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        placeholder={placeholder}
        name={name}
      />
    </div>
  )
}

export default TextInput
