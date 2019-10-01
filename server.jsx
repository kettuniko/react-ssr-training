import http from 'http'
import express from 'express'
import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import ReactDOM from 'react-dom/server'
import WordList from './WordList.jsx'
import reducer from './reducer'

const port = 3000
const app = express()
const server = http.createServer(app)

app.use('/dist', express.static('dist'))

const initialState = {
  words: [
    'heirloom',
    'lefta',
    'pants',
    'agape',
    'yield',
    'middling',
    'slope',
    'catch',
    'engraft-parakeet',
  ]
}

const store = createStore(reducer, initialState)

app.get('/', (_, res) => res.send(`
<html>
  <body>
    <div id="root">${ReactDOM.renderToString(<Provider store={store}><WordList/></Provider>)}</div>
    <script>
      window.__PRELOADED_STATE__ = ${JSON.stringify(initialState).replace(/</g, '\\u003c')}
    </script>
    <script src="/dist/bundle.js"></script>
  </body>
</html>
`.trim()))

server.listen(port, () => console.log(`Listening on port ${port}`))
