const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))

var WebSocketServer = require('ws').Server,
wss = new WebSocketServer({port: 40510})

wss.on('connection', function (ws) {
  ws.on('message', function (message) {
    console.log('received: %s', message)
  })
})

app.get('/', (req, res) => {
  res.sendfile(__dirname + '/index.html');
})

app.get('/left', (req, res) => {
  wss.clients.forEach(c => {
    c.send('left')
  })
  res.sendStatus(200)
})

app.get('/right', (req, res) => {
  wss.clients.forEach(c => {
    c.send('right')
  })
  res.sendStatus(200)
})

app.get('/thrust', (req, res) => {
  wss.clients.forEach(c => {
    c.send('thrust')
  })
  res.sendStatus(200)
})

app.get('/start', (req, res) => {
  wss.clients.forEach(c => {
    c.send('start')
  })
  res.sendStatus(200)
})