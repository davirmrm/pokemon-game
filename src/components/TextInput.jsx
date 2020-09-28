import React from 'react'

const TextInput = ({
  className = '',
  label = '',
  placeholder = '',
  name = '',
  value = '',
  onChange,
  onBlur,
  error = null
}) => {
  return (
    <div className={`${className} input__container ${error ? 'input--error' : ''}`}>
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
      {error ? <span className='input__mensage'>{error}</span> : null}
    </div>
  )
}

export default TextInput
