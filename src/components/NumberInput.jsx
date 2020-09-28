import React from 'react'
import chevron from '../assets/images/chevronDownBlack.png'

const NumberInput = ({ className = '', label, placeholder, name, value, suffix, onChange, onBlur, error = null }) => {
  const clickNumber = tipo => {
    const Valor = tipo === '+' ? (Number(value) ? Number(value) : 0) + 1 : (Number(value) ? Number(value) : 0) - 1
    const resp = { target: { type: 'number', name: name, value: Valor } }

    onChange(resp)
    onBlur(resp)
  }

  return (
    <div className={`${className} input__container ${error ? 'input--error' : ''}`}>
      {label && <label className='input__label'>{label}</label>}
      <div className='input__number'>
        <input
          className='input'
          type='number'
          placeholder={placeholder}
          name={name}
          value={value}
          onBlur={onBlur}
          onChange={e => onChange(e)}
        />
        {suffix && <p className='input__suffix'>{suffix}</p>}
        <div className='input__btns'>
          <img src={chevron} className='input__increase' alt='Mais' onClick={e => clickNumber('+')} />
          <img src={chevron} className='input__decrease' alt='Menos' onClick={e => clickNumber('-')} />
        </div>
      </div>
      {error ? <span className='input__mensage'>{error}</span> : null}
    </div>
  )
}

export default NumberInput
