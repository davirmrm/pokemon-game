import {
  MODAL_OPEN,
  CARREGAR_HABILIDADES,
  CARREGAR_TIPOS,
  CARREGAR_POKEMON,
  CAPTURAR_POKEMON,
  LIBERAR_POKEMON,
  ATUALIZAR_POKEMON,
  CHANGE_INFORMACAO,
  EDITAR_STATUS,
  JOGADOR_STATUS
} from './Actions'

const pokemonDefault = {
  imagem: '',
  altura: '',
  ataque: '',
  ataqueEspecial: '',
  defesa: '',
  defesaEspecial: '',
  habilidades: [],
  habilidade1: {},
  habilidade2: {},
  habilidade3: {},
  habilidade4: {},
  hp: '',
  nome: '',
  peso: '',
  tipos: [],
  velocidade: ''
}
const initialState = {
  capturados: [],
  pokemon: pokemonDefault,
  habilidades: [],
  tipos: [],
  modalStatus: '',
  editarStatus: false,
  jogadorStatus: 'cacar'
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case MODAL_OPEN:
      return { ...state, modalStatus: payload, pokemon: payload === 'limpar' ? pokemonDefault : state.pokemon }
    case EDITAR_STATUS:
      return { ...state, editarStatus: payload }
    case JOGADOR_STATUS:
      return { ...state, jogadorStatus: payload }
    case CARREGAR_HABILIDADES:
      return { ...state, habilidades: payload.results }
    case CARREGAR_TIPOS:
      return { ...state, tipos: payload.results }
    case CARREGAR_POKEMON:
      return { ...state, pokemon: payload }
    case CAPTURAR_POKEMON:
      return { ...state, capturados: [...state.capturados, { ...payload, id: state.capturados.length }] }
    case ATUALIZAR_POKEMON:
      return {
        ...state,
        editarStatus: false,
        pokemon: payload,
        capturados: state.capturados.map(p => (p.id === payload.id ? payload : p))
      }
    case LIBERAR_POKEMON:
      return { ...state, capturados: state.capturados.filter(p => p.id !== payload.id) }
    case CHANGE_INFORMACAO:
      return { ...state, pokemon: { ...state.pokemon, [payload.target.name]: payload.target.value } }
    default:
      return state
  }
}
