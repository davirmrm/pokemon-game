import { ValidacaoErro } from '../screens/Map/redux/Actions'

const typePatern = {
  phone: /\([0-9]{2}\) [0-9]{4,7}-[0-9]{4,5}$/,
  email: /[a-zA-Z0-9]+[.]?([a-zA-Z0-9]+)?[@][a-z]{3,9}[.][a-z]{2,5}/g,
  ip: /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/,
  number: /[0-9]+$/
}

export const validacaoCampo = ({ valor, name, pattern }) => {
  const erro = {}
  if (valor.search(typePatern[pattern] ? typePatern[pattern] : pattern) === -1) {
    erro.campo = name
    erro.mensagem = true
  } else {
    erro.campo = name
    erro.mensagem = false
  }
  return erro
}

export const ValidacaoCampos = (params, lista) => {
  let erro = []

  for (const name in lista) {
    if (Object.keys(params[name]).length === 0) {
      if (Number.isInteger(params[name]) && String(params[name]) === '') {
        erro = { ...erro, [name]: true }
      } else if (Array.isArray([params[name]]) && params[name].length === 0) {
        erro = { ...erro, [name]: true }
      } else if (params[name] === '') {
        erro = { ...erro, [name]: true }
      }
    }
  }

  return erro
}

export const ValidacaoCampo = (params, erro) => {
  if (params.target.type === 'number') {
    erro = { ...erro, [params.target.name]: String(params.target.value) !== '' ? false : true }
  } else {
    erro = { ...erro, [params.target.name]: Object.keys(params.target.value).length !== 0 ? false : true }
  }

  return dispatch => {
    dispatch(ValidacaoErro(erro))
  }
}
