import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Sidebar from '../../components/Sidebar'
import Modal from '../../components/Modal'
import CacarPokemonModal from './conteudo/CacarPokemonModal'
import CriarPokemonModal from './conteudo/CriarPokemonModal'
import VerPokemonModal from './conteudo/VerPokemonModal'
import Jogador from './conteudo/Jogador'
import { CapturarPokemon, CloseModal, EditarPokemon, LiberarPokemon } from './redux/Actions'
import Button from '../../components/Button'
import { IcoPokebola } from '../../components/Icone'

export default () => {
  const dispatch = useDispatch()
  const modalStatus = useSelector(state => state.mapState.modalStatus)
  const pokemon = useSelector(state => state.mapState.pokemon)

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
          <Button
            text={pokemon.idMeu ? 'EDITAR POKEMON' : 'CRIAR POKEMON'}
            onClick={() =>
              dispatch(pokemon.idMeu ? EditarPokemon(pokemon) : CapturarPokemon({ ...pokemon, idMeu: true }))
            }
          />
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
