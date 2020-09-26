import React, { useState } from 'react'
import chevron from '../assets/images/chevronDownBlack.png'

const Dropdown = ({ name, options, multiple, selected, select }) => {
  const [dropdownState, setDropdownState] = useState({ open: false })

  const selectChange = e => {
    select({ target: { name: name, value: e } })
  }

  return (
    <div className='dropdown'>
      <button
        className='dropdown__selected'
        onClick={() => setDropdownState({ ...dropdownState, open: !dropdownState.open })}
      >
        {selected && selected.name ? selected.name : 'Selecione o(s) tipo(s)'}
        <img src={chevron} className='dropdown__icon' alt='Chevron' />
      </button>
      {dropdownState && dropdownState.open ? (
        <div className='dropdown__container'>
          <div
            className='dropdown__option'
            value=''
            onClick={() => [selectChange(), setDropdownState({ ...dropdownState, open: false })]}
          >
            Selecione o(s) tipo(s)
          </div>
          {options &&
            options.map((option, i) => (
              <div
                key={`option-${i}`}
                className='dropdown__option'
                onClick={() => [selectChange(option), setDropdownState({ ...dropdownState, open: false })]}
              >
                {option.name}
              </div>
            ))}
        </div>
      ) : null}
    </div>
  )
}

export default Dropdown
