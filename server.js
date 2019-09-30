import http from 'http'
import express from 'express'
import WordList from './WordList.js'

const port = 3000
const app = express()
const server = http.createServer(app)

app.get('/', (_, res) => res.send(`
<html>
  <body>
    <div>
      ${WordList()}
    </div>
  </body>
</html>
`.trim()))

server.listen(port, () => console.log(`Listening on port ${port}`))
