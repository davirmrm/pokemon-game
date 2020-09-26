import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IcoCancelar, IcoCheck } from '../../../components/Icone'
import TextInput from '../../../components/TextInput'
import { EditarStatus, AtualizarPokemon } from '../redux/Actions'

export default () => {
  const dispatch = useDispatch()
  const [editar, setEditar] = useState('')
  const pokemon = useSelector(state => state.mapState.pokemon)

  useEffect(() => {
    setEditar(pokemon.nome)
  }, [pokemon.nome])

  return (
    <div className='editar-nome'>
      <TextInput name='nome' label='' onChange={e => setEditar(e.target.value)} value={editar} placeholder='Nome' />
      <button
        onClick={() => dispatch(AtualizarPokemon({ ...pokemon, nome: editar.toUpperCase() }))}
        disabled={editar ? false : true}
      >
        <IcoCheck />
      </button>
      <button onClick={() => dispatch(EditarStatus(false))}>
        <IcoCancelar />
      </button>
    </div>
  )
}
