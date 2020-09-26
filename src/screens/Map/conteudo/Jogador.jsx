import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CacarPokemon, setJogadorStatus } from '../redux/Actions'

export default () => {
  const dispatch = useDispatch()
  const mapState = useSelector(state => state.mapState)

  return (
    <button
      className={`gamer ${
        mapState.capturados.length < 6 ? (mapState.jogadorStatus === 'cacando' ? 'cacando' : 'caca') : 'caca-erro'
      }`}
      disabled={mapState.jogadorStatus === 'cacando' || mapState.capturados.length > 5 ? true : false}
      onClick={() => dispatch([setJogadorStatus('cacando'), CacarPokemon()])}
    ></button>
  )
}
