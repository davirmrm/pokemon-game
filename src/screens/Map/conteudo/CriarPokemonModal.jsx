import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import TextInput from '../../../components/TextInput'
import NumberInput from '../../../components/NumberInput'
import Dropdown from '../../../components/Dropdown'
import { CarregarTipos, ChangeInformacao } from '../redux/Actions'
import { IcoCameraAdd } from '../../../components/Icone'
import AddFoto from '../../../components/AddFoto'
import { ValidacaoCampo } from '../../../components/Validation'

export default () => {
  const dispatch = useDispatch()
  const Tipos = useSelector(state => state.mapState.tipos)
  const pokemon = useSelector(state => state.mapState.pokemon)
  const error = useSelector(state => state.mapState.error)

  useEffect(() => {
    dispatch(CarregarTipos())
  }, [dispatch])

  const ChangeHabilidade = e => {
    const valor = { target: { name: e.target.name, value: { name: e.target.value } } }
    dispatch(ChangeInformacao(valor))
  }

  const CriaHabilidade = e => {
    const valor = []
    if (pokemon.habilidade1.name) valor.push(pokemon.habilidade1)
    if (pokemon.habilidade2.name) valor.push(pokemon.habilidade2)
    if (pokemon.habilidade3.name) valor.push(pokemon.habilidade3)
    if (pokemon.habilidade4.name) valor.push(pokemon.habilidade4)

    const habilidade = {
      target: {
        name: 'habilidades',
        value: valor
      }
    }
    dispatch([ChangeInformacao(habilidade), ValidacaoCampo(e, error)])
  }

  return (
    <>
      <div className='dados'>
        <div className='dados__img'>
          <AddFoto
            name='imagem'
            onChange={e => dispatch(ChangeInformacao(e))}
            value={pokemon.imagem}
            icon={
              pokemon.imagem ? (
                <>
                  <IcoCameraAdd />
                  <img src={pokemon.imagem} alt={pokemon.nome} title={pokemon.nome} />
                </>
              ) : (
                <IcoCameraAdd />
              )
            }
          />
        </div>

        <TextInput
          name='nome'
          label='NOME'
          onChange={e => dispatch(ChangeInformacao(e))}
          value={pokemon.nome}
          placeholder='Nome'
          onBlur={e => dispatch(ValidacaoCampo(e, error))}
          error={error.nome ? 'Mensagem de erro' : null}
        />
        <NumberInput
          name='hp'
          label='HP'
          onChange={e => dispatch(ChangeInformacao(e))}
          value={pokemon.hp}
          placeholder='HP'
          onBlur={e => dispatch(ValidacaoCampo(e, error))}
          error={error.hp ? 'Mensagem de erro' : null}
        />
        <NumberInput
          name='altura'
          label='ALTURA'
          onChange={e => dispatch(ChangeInformacao(e))}
          placeholder='Altura'
          value={pokemon.altura}
          suffix='Cm'
          onBlur={e => dispatch(ValidacaoCampo(e, error))}
          error={error.altura ? 'Mensagem de erro' : null}
        />
        <NumberInput
          name='peso'
          label='PESO'
          onChange={e => dispatch(ChangeInformacao(e))}
          placeholder='Peso'
          value={pokemon.peso}
          suffix='Kg'
          onBlur={e => dispatch(ValidacaoCampo(e, error))}
          error={error.peso ? 'Mensagem de erro' : null}
        />
      </div>
      <h3 className='dados__titulo'>
        <span>tipo</span>
      </h3>
      <div>
        <Dropdown
          label=''
          name='tipos'
          select={e => dispatch(ChangeInformacao(e))}
          options={Tipos}
          selected={pokemon.tipos}
          validation={e => dispatch(ValidacaoCampo(e, error))}
          error={error.tipos ? 'Mensagem de erro' : null}
          multiple='2'
        />
      </div>
      <h3 className='dados__titulo'>
        <span>habillidades</span>
      </h3>
      <div>
        <TextInput
          name='habilidade1'
          onChange={e => ChangeHabilidade(e)}
          onBlur={e => CriaHabilidade(e)}
          value={pokemon.habilidade1.name}
          placeholder='Habilidade 1'
          error={error.habilidade1 ? 'Mensagem de erro' : null}
        />
        <TextInput
          name='habilidade2'
          onChange={e => ChangeHabilidade(e)}
          onBlur={e => CriaHabilidade(e)}
          value={pokemon.habilidade2.name}
          placeholder='Habilidade 2'
          error={error.habilidade2 ? 'Mensagem de erro' : null}
        />
        <TextInput
          name='habilidade3'
          onChange={e => ChangeHabilidade(e)}
          onBlur={e => CriaHabilidade(e)}
          value={pokemon.habilidade3.name}
          placeholder='Habilidade 3'
          error={error.habilidade3 ? 'Mensagem de erro' : null}
        />
        <TextInput
          name='habilidade4'
          onChange={e => ChangeHabilidade(e)}
          onBlur={e => CriaHabilidade(e)}
          value={pokemon.habilidade4.name}
          placeholder='Habilidade 4'
          error={error.habilidade4 ? 'Mensagem de erro' : null}
        />
      </div>
      <h3 className='dados__titulo'>
        <span>estatistias</span>
      </h3>
      <div>
        <NumberInput
          name='defesa'
          label='DEFESA'
          onChange={e => dispatch(ChangeInformacao(e))}
          value={pokemon.defesa}
          placeholder='00'
          onBlur={e => dispatch(ValidacaoCampo(e, error))}
          error={error.defesa ? 'Mensagem de erro' : null}
        />
        <NumberInput
          name='ataque'
          label='ATAQUE'
          onChange={e => dispatch(ChangeInformacao(e))}
          value={pokemon.ataque}
          placeholder='00'
          onBlur={e => dispatch(ValidacaoCampo(e, error))}
          error={error.ataque ? 'Mensagem de erro' : null}
        />
        <NumberInput
          name='defesaEspecial'
          label='DEFESA ESPECIAL'
          onChange={e => dispatch(ChangeInformacao(e))}
          value={pokemon.defesaEspecial}
          placeholder='00'
          onBlur={e => dispatch(ValidacaoCampo(e, error))}
          error={error.defesaEspecial ? 'Mensagem de erro' : null}
        />
        <NumberInput
          name='ataqueEspecial'
          label='ATAQUE ESPECIAL'
          onChange={e => dispatch(ChangeInformacao(e))}
          value={pokemon.ataqueEspecial}
          placeholder='00'
          onBlur={e => dispatch(ValidacaoCampo(e, error))}
          error={error.ataqueEspecial ? 'Mensagem de erro' : null}
        />
        <NumberInput
          name='velocidade'
          label='VELOCIADE'
          onChange={e => dispatch(ChangeInformacao(e))}
          value={pokemon.velocidade}
          placeholder='00'
          onBlur={e => dispatch(ValidacaoCampo(e, error))}
          error={error.velocidade ? 'Mensagem de erro' : null}
        />
      </div>
    </>
  )
}
