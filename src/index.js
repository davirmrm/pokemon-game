import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Store } from './helpers/Store'
import 'typeface-roboto'
import './index.scss'
import App from './App'

const app = (
  <Provider store={Store}>
    <App />
  </Provider>
)

ReactDOM.render(app, document.getElementById('root'))
