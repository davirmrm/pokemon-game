import React from 'react'
import Button from '../../components/Button'
import { history } from '../../helpers'
import LogoPokemon from './../../assets/images/pokemonLogo.png'

const HomePage = () => (
  <div className='home'>
    <div className='start-logo'>
      <img src={LogoPokemon} alt='Logo Pokemon' title='Logo Pokemon' />
      <Button text='START' onClick={() => history.push('/map')} />
    </div>
  </div>
)

export default HomePage
