import axios from 'axios'

export const ajustText = (t, u = false) => {
  const upercase = u ? t.toUpperCase() : t.charAt(0).toUpperCase() + t.slice(1)
  return upercase.replace('-', ' ').replace('-', ' ').replace('-', ' ').replace('-', ' ')
}

export const EDITAR_STATUS = 'EDITAR_STATUS'
export const EditarStatus = e => ({
  type: EDITAR_STATUS,
  payload: e
})

export const CHANGE_INFORMACAO = 'CHANGE_INFORMACAO'
export const ChangeInformacao = e => ({
  type: CHANGE_INFORMACAO,
  payload: e
})

export const MODAL_OPEN = 'MODAL_OPEN'
const modalOpen = e => ({
  type: MODAL_OPEN,
  payload: e
})

const modalClose = () => ({
  type: MODAL_OPEN,
  payload: 'limpar'
})

export const AddPokemon = () => [modalOpen('criarPokemon')]
export const VerPokemon = e => [modalOpen('verPokemon'), setCarregarPokemon(e)]
export const CloseModal = () => [modalClose()]

export const ATUALIZAR_POKEMON = 'ATUALIZAR_POKEMON'
export const AtualizarPokemon = e => ({
  type: ATUALIZAR_POKEMON,
  payload: e
})

export const JOGADOR_STATUS = 'JOGADOR_STATUS'
export const setJogadorStatus = e => ({
  type: JOGADOR_STATUS,
  payload: e
})

export const CARREGAR_POKEMON = 'CARREGAR_POKEMON'
export const setCarregarPokemon = e => ({
  type: CARREGAR_POKEMON,
  payload: e
})

export const CacarPokemon = () => {
  const idRandom = Math.floor(Math.random() * 807)
  return dispatch => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${idRandom}`)
      .then(resposta => {
        const pokemon = resposta.data
        const pokemonDefault = {
          imagem: pokemon.sprites.front_default,
          altura: pokemon.height * 10,
          ataque: pokemon.stats[1].base_stat,
          ataqueEspecial: pokemon.stats[3].base_stat,
          defesa: pokemon.stats[2].base_stat,
          defesaEspecial: pokemon.stats[4].base_stat,
          habilidades: pokemon.abilities.map(h => {
            return { id: h.slot, name: ajustText(h.ability.name, true) }
          }),
          hp: pokemon.stats[0].base_stat,
          nome: ajustText(pokemon.name, true),
          peso: pokemon.weight * 10,
          tipos: pokemon.types.map(t => {
            return { id: t.slot, name: ajustText(t.type.name, true) }
          }),
          velocidade: pokemon.stats[5].base_stat
        }
        setTimeout(function () {
          dispatch([setCarregarPokemon(pokemonDefault), setJogadorStatus('caca'), modalOpen('cacarPokemon')])
        }, 1000)
      })
      .catch(error => {
        console.log(error)
      })
  }
}

export const CARREGAR_HABILIDADES = 'CARREGAR_HABILIDADES'
const setCarregarHabilidades = h => ({
  type: CARREGAR_HABILIDADES,
  payload: h
})

export const CarregarHabilidades = e => {
  return dispatch => {
    axios
      .get(`https://pokeapi.co/api/v2/ability?limit=500`)
      .then(resposta => {
        console.log(resposta.data, 'respostarespostarespostarespostarespostaresposta')
        dispatch(setCarregarHabilidades(resposta.data))
      })
      .catch(error => {
        console.log(error)
      })
  }
}

export const CARREGAR_TIPOS = 'CARREGAR_TIPOS'
const setCarregarTipos = h => ({
  type: CARREGAR_TIPOS,
  payload: h
})

export const CarregarTipos = e => {
  return dispatch => {
    axios
      .get(`https://pokeapi.co/api/v2/type?limit=100`)
      .then(resposta => {
        dispatch(setCarregarTipos(resposta.data))
      })
      .catch(error => {
        console.log(error)
      })
  }
}

export const CAPTURAR_POKEMON = 'CAPTURAR_POKEMON'
const setCapturar = e => ({
  type: CAPTURAR_POKEMON,
  payload: e
})

export const CapturarPokemon = e => [setCapturar(e), modalClose(), setCarregarPokemon({})]
export const EditarPokemon = e => [AtualizarPokemon(e), modalClose()]

export const LIBERAR_POKEMON = 'LIBERAR_POKEMON'
const setLiberar = e => ({
  type: LIBERAR_POKEMON,
  payload: e
})

export const LiberarPokemon = e => [setLiberar(e), modalClose()]
