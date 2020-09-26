import React from 'react'
import chevron from '../assets/images/chevronDownBlack.png'

const NumberInput = ({ className = '', label, placeholder, name, value, suffix, onChange }) => {
  return (
    <div className={`${className} input__container`}>
      {label && <label className='input__label'>{label}</label>}
      <div className='input__number'>
        <input
          className='input'
          type='number'
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={e => onChange(e)}
        />
        {suffix && <p className='input__suffix'>{suffix}</p>}
        <div className='input__btns'>
          <img
            src={chevron}
            className='input__increase'
            alt='Mais'
            onClick={e => onChange({ target: { name: name, value: (Number(value) ? Number(value) : 0) + 1 } })}
          />
          <img
            src={chevron}
            className='input__decrease'
            alt='Menos'
            onClick={e => onChange({ target: { name: name, value: (Number(value) ? Number(value) : 0) - 1 } })}
          />
        </div>
      </div>
    </div>
  )
}

export default NumberInput
