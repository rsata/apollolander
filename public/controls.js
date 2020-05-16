var ws = new WebSocket('ws://localhost:40510');
// event emmited when connected
ws.onopen = function () {
  console.log('websocket is connected ...')
  // sending a send event to websocket server
  ws.send('connected')
}
// event emmited when receiving message 
ws.onmessage = function (ev) {
  console.log(ev.data);
  switch (ev.data) {
    case 'left':
      lander.rotate(-1)
      break;
    case 'right':
      lander.rotate(1)
      break;
    case 'thrust':
      lander.thrust(1)
      setTimeout(() => {
        lander.thrust(0)
      }, 1000)
      break;
    case 'start':
      newGame()
      break;
    default:
      console.log('send correct commands')
  }
}