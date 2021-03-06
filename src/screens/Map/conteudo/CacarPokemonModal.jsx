import React from 'react'
import { useSelector } from 'react-redux'
import { IcoAtaque, IcoCameraAdd, IcoDefesa, IcoVelocidade } from '../../../components/Icone'
import tiposP from '../../../pokemon.json'

export default () => {
  const pokemon = useSelector(state => state.mapState.pokemon)
  const verifyType = t => {
    const tipoFiltro = tiposP.type.filter(tipo => tipo.name === t.name)
    return tipoFiltro[0].nome.toUpperCase()
  }

  return (
    <>
      <div className='dados'>
        <div className='dados__img'>
          {pokemon.imagem ? <img src={pokemon.imagem} alt={pokemon.nome} /> : <IcoCameraAdd />}
        </div>
        <h2>{pokemon.nome}</h2>
        <div className='dados__info'>
          <h3>
            <small>HP</small>
            {`${pokemon.hp}`}
          </h3>
          <h3>
            <small>ALTURA</small>
            {`${pokemon.altura / 100} m`}
          </h3>
          <h3>
            <small>PESO</small>
            {`${pokemon.peso / 100} kg`}
          </h3>
        </div>
      </div>
      <h3 className='dados__titulo'>
        <span>TIPO</span>
      </h3>
      <div className='dados__tipo'>
        {pokemon.tipos.map((t, i) => (
          <span key={'t-' + i} className={`dados__tipo__item type--${t.name.toLowerCase()}`}>
            {verifyType(t)}
          </span>
        ))}
      </div>
      <h3 className='dados__titulo'>
        <span>HABILIDADE</span>
      </h3>
      <div className='dados__habilidades'>
        <p>
          {pokemon.habilidades.map((h, i) => (
            <span key={'h-' + i}>{`${i === 0 ? '' : ' - '}${h.name}`}</span>
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
          <span>{pokemon.defesa}</span>
        </p>
        <p>
          <strong>
            <IcoAtaque /> ATAQUE
          </strong>
          <span>{pokemon.ataque}</span>
        </p>
        <p>
          <strong>
            <IcoDefesa /> DEFESA ESPECIAL
          </strong>
          <span>{pokemon.defesaEspecial}</span>
        </p>
        <p>
          <strong>
            <IcoAtaque /> ATAQUE ESPECIAL
          </strong>
          <span>{pokemon.ataqueEspecial}</span>
        </p>
        <p>
          <strong>
            <IcoVelocidade /> VELOCIDADE
          </strong>
          <span>{pokemon.velocidade}</span>
        </p>
      </div>
    </>
  )
}
