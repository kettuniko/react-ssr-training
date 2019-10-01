import React from 'react'
import { hydrate } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import WordList from './WordList.jsx'
import reducer from './reducer'

const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = createStore(reducer, window.__PRELOADED_STATE__, reduxDevTools)

hydrate(
  <Provider store={store}><WordList/></Provider>,
  document.getElementById('root')
)

delete window.__PRELOADED_STATE__
