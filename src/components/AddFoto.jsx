import React from 'react'
const AddFoto = ({ className = '', label = '', name = '', value = '', icon = false, onChange }) => {
  const changeFoto = e => {
    var resultFile = new FileReader()

    if (e.target.files && e.target.files[0]) {
      resultFile.readAsDataURL(e.target.files[0])
    }

    resultFile.onloadend = b => onChange({ target: { name: name, value: b.target.result } })
  }
  return (
    <div className={`${className} input__fileimg`}>
      {label && <label className='input__label'>{label}</label>}
      <input className='input' type='file' onChange={e => changeFoto(e)} name={name} />
      {icon ? icon : null}
    </div>
  )
}

export default AddFoto
