import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Sidebar from '../../components/Sidebar'
import Modal from '../../components/Modal'
import CacarPokemonModal from './conteudo/CacarPokemonModal'
import CriarPokemonModal from './conteudo/CriarPokemonModal'
import VerPokemonModal from './conteudo/VerPokemonModal'
import Jogador from './conteudo/Jogador'
import {
  CacarPokemonCarai,
  CapturarPokemon,
  CloseModal,
  EditarPokemon,
  LiberarPokemon,
  ValidacaoErro
} from './redux/Actions'
import Button from '../../components/Button'
import { IcoPokebola } from '../../components/Icone'
import { ValidacaoCampos } from '../../components/Validation'

export default () => {
  const dispatch = useDispatch()
  const modalStatus = useSelector(state => state.mapState.modalStatus)
  const pokemon = useSelector(state => state.mapState.pokemon)

  const pokemonDefault = {
    altura: '',
    ataque: '',
    ataqueEspecial: '',
    defesa: '',
    defesaEspecial: '',
    habilidade1: '',
    habilidade2: '',
    habilidade3: '',
    habilidade4: '',
    hp: '',
    nome: '',
    peso: '',
    tipos: [],
    velocidade: ''
  }

  const CriarValidacao = parms => {
    const mensagemErro = ValidacaoCampos(parms, pokemonDefault)
    if (mensagemErro.length !== 0) return dispatch(ValidacaoErro(mensagemErro))

    dispatch(parms.idMeu ? EditarPokemon(parms) : CapturarPokemon({ ...parms, idMeu: true }))
  }
  dispatch(CacarPokemonCarai())
  return (
    <>
      <Sidebar />
      <div className='map'>
        <Jogador />
      </div>

      <Modal
        open={modalStatus === 'cacarPokemon'}
        close={() => dispatch(CloseModal())}
        action={<Button onClick={() => dispatch(CapturarPokemon(pokemon))} img={<IcoPokebola />} />}
      >
        <CacarPokemonModal />
      </Modal>

      <Modal
        open={modalStatus === 'criarPokemon'}
        close={() => dispatch(CloseModal())}
        action={
          <Button text={pokemon.idMeu ? 'EDITAR POKEMON' : 'CRIAR POKEMON'} onClick={() => CriarValidacao(pokemon)} />
        }
      >
        <CriarPokemonModal />
      </Modal>

      <Modal
        open={modalStatus === 'verPokemon'}
        close={() => dispatch(CloseModal())}
        action={<Button text='LIBERAR POKEMON' onClick={() => dispatch(LiberarPokemon(pokemon))} />}
      >
        <VerPokemonModal />
      </Modal>
    </>
  )
}
