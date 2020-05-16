## Segment Funcy Lander
Try to land on the moon with Segment Functions. All credit to the actual game code here: https://github.com/sebleedelisle/apollolander

## Setup
* Run `npm install`
* Start the server `npm start`
* Create a tunnel `ngrok 3000` (or whatever port you are running the game on)
* Configure your function to use the address from ngrok. Function code in `function.js`
* Send track calls to a webhook to trigger actions
* See the results at `localhost:3000`

## Controls
The event name controls the game: 
* `event: "Start Game"` starts the game
* `event: "Add Thrust"` gives your lunar lander some gas
* `event: "Rotate Left"` does what is says
* `event: "Rotate Right"` also does what it says
