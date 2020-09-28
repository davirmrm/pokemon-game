import React, { useRef, useState } from 'react'
import chevron from '../assets/images/chevronDownBlack.png'
import useOutsideClick from './Useoutsideclick'

const Dropdown = ({ name, options, multiple = false, selected, select, validation, error = null }) => {
  const labelDefault = 'Selecione o(s) tipo(s)'
  const [dropdownState, setDropdownState] = useState({ open: false })

  const verifySelect = e => {
    const itemSelect = selected.filter(item => item === e)
    const itemDeselect = selected.filter(item => item !== e)
    const multipleValid = Number(multiple) > selected.length || Number(multiple) === 1 ? [...selected, e] : selected

    return itemSelect.length === 0 ? multipleValid : itemDeselect
  }

  const selectChange = e => {
    validation({ target: { type: 'select', name: name, value: e } })

    if (multiple) {
      select({ target: { name: name, value: verifySelect(e) } })
    } else {
      select({ target: { name: name, value: e } })
    }

    setDropdownState({ ...dropdownState, open: multiple ? true : false })
  }

  const verifySelected = e => {
    const verify = selected.filter(f => f === e)
    return verify.length
  }

  const ref = useRef()
  useOutsideClick(ref, e => {
    setDropdownState({ ...dropdownState, open: false })
  })

  return (
    <div ref={ref} className={`dropdown ${error ? 'dropdown--error' : ''}`}>
      <button
        className='dropdown__selected'
        onClick={() => setDropdownState({ ...dropdownState, open: !dropdownState.open })}
      >
        {selected.length === 0 ? labelDefault : selected.map(s => <span key={s.name}>{s.name}</span>)}
        <img src={chevron} className='dropdown__icon' alt='Chevron' />
      </button>
      {dropdownState && dropdownState.open ? (
        <div className='dropdown__container'>
          {!multiple ? (
            <div className='dropdown__option' value='' onClick={() => selectChange()}>
              {labelDefault}
            </div>
          ) : null}

          {options &&
            options.map((option, i) => (
              <div
                key={`option-${i}`}
                className={`dropdown__option ${verifySelected(option) ? 'selected' : ''}`}
                onClick={() => selectChange(option)}
              >
                {option.name}
              </div>
            ))}
        </div>
      ) : null}
      {error ? <span className='input__mensage'>{error}</span> : null}
    </div>
  )
}

export default Dropdown
