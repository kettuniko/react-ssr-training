import React from 'react'
import { hydrate } from 'react-dom'
import WordList from './WordList.jsx'

hydrate(
  <WordList/>,
  document.getElementById('root')
)
