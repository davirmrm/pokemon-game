import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IcoAtaque, IcoCamera, IcoDefesa, IcoEditar, IcoVelocidade } from '../../../components/Icone'
import EditarNome from './EditarNome'
import { AddPokemon, EditarStatus } from '../redux/Actions'

export default () => {
  const dispatch = useDispatch()
  const pokemon = useSelector(state => state.mapState.pokemon)
  const editarStatus = useSelector(state => state.mapState.editarStatus)

  return (
    <>
      <div className='dados'>
        <div className='dados__img'>
          {pokemon.imagem ? <img src={pokemon.imagem} alt={pokemon.nome} /> : <IcoCamera />}
        </div>
        {editarStatus ? <EditarNome /> : null}
        <h2>
          {pokemon.nome.toUpperCase()}
          <button onClick={() => dispatch(pokemon.idMeu ? AddPokemon(pokemon) : EditarStatus(true))}>
            <IcoEditar />
          </button>
        </h2>
        <div className='dados__info'>
          <h3>
            <small>HP</small>
            {`${0 + pokemon.hp}`}
          </h3>
          <h3>
            <small>ALTURA</small>
            {`${pokemon.altura / (pokemon.idMeu ? 1 : 100)} m`}
          </h3>
          <h3>
            <small>PESO</small>
            {`${pokemon.peso / (pokemon.idMeu ? 1 : 100)} kg`}
          </h3>
        </div>
      </div>
      <h3 className='dados__titulo'>
        <span>TIPO</span>
      </h3>
      <div className='dados__tipo'>
        {pokemon.tipos.map((t, i) => (
          <span key={'t-' + i} className={`dados__tipo__item ${t.slot === 2 ? 'purple' : ''}`}>
            {t.name.toUpperCase()}
          </span>
        ))}
      </div>
      <h3 className='dados__titulo'>
        <span>HABILIDADE</span>
      </h3>
      <div className='dados__habilidades'>
        <p>
          {pokemon.habilidades.map((h, i) => (
            <span key={'h-' + i}>{`${i === 0 ? '' : ' - '}${h.name.toUpperCase()}`}</span>
          ))}
        </p>
      </div>
      <h3 className='dados__titulo'>
        <span>ESTATÍSTICAS</span>
      </h3>
      <div className='dados__estatisticas'>
        <p>
          <strong>
            <IcoDefesa /> DEFESA
          </strong>
          <span>{0 + pokemon.defesa}</span>
        </p>
        <p>
          <strong>
            <IcoAtaque /> ATAQUE
          </strong>
          <span>{0 + pokemon.ataque}</span>
        </p>
        <p>
          <strong>
            <IcoDefesa /> DEFESA ESPECIAL
          </strong>
          <span>{0 + pokemon.defesaEspecial}</span>
        </p>
        <p>
          <strong>
            <IcoAtaque /> ATAQUE ESPECIAL
          </strong>
          <span>{0 + pokemon.ataqueEspecial}</span>
        </p>
        <p>
          <strong>
            <IcoVelocidade /> VELOCIDADE
          </strong>
          <span>{0 + pokemon.velocidade}</span>
        </p>
      </div>
    </>
  )
}
