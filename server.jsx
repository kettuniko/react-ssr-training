import http from 'http'
import express from 'express'
import React from 'react'
import ReactDOM from 'react-dom/server'
import WordList from './WordList.jsx'

const port = 3000
const app = express()
const server = http.createServer(app)

app.use('/dist', express.static('dist'))

app.get('/', (_, res) => res.send(`
<html>
  <body>
    <div id="root">${ReactDOM.renderToString(<WordList/>)}</div>
    <script src="/dist/bundle.js"></script>
  </body>
</html>
`.trim()))

server.listen(port, () => console.log(`Listening on port ${port}`))
