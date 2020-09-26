import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Button from './Button'
import plusIcon from '../assets/images/plus.png'
import { AddPokemon, VerPokemon } from '../screens/Map/redux/Actions'
import { IcoCamera } from './Icones/Camera'

export default () => {
  const dispatch = useDispatch()
  const capturados = useSelector(state => state.mapState.capturados)

  return (
    <div className='sidebar'>
      {capturados &&
        capturados.map(pokemon => (
          <div
            key={pokemon.id}
            className='sidebar__item'
            onClick={() => dispatch(VerPokemon(pokemon))}
            title={pokemon.nome}
          >
            {pokemon.imagem ? <img src={pokemon.imagem} alt={pokemon.nome} /> : <IcoCamera />}
          </div>
        ))}
      {capturados.length < 6 ? (
        <Button icon={<img src={plusIcon} alt='+' />} onClick={() => dispatch(AddPokemon())} />
      ) : null}
    </div>
  )
}
