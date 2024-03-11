//https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API
//https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API/Writing_WebSocket_client_applications

//https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API/Writing_WebSocket_servers

//to see how to implement server  i C#
//https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API/Writing_WebSocket_server   
//https://docs.microsoft.com/en-us/aspnet/core/fundamentals/websockets?view=aspnetcore-6.0

//to see how to implement server  i java
//https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API/Writing_a_WebSocket_server_in_Java

const WebSocket = require('ws');
const port = 3000;

const wss = new WebSocket.Server({ port: port });
console.log(`Websocket is listening on port ${port}`);

wss.on('connection', function connection(ws) {

  console.log('connection established, sending first message to client');

  // object being passed back and forth between
  // client and server
  const msgToClient = { command: 'hello', counter: 0 };

  // send first communication to client
  ws.send(JSON.stringify(msgToClient));
  console.log('transmit hello to client');

  // on response back
  ws.on('message', message => {

    console.log('recieved message from client');
    const msgFromClient = JSON.parse(message);

    if (msgFromClient.command === 'hello') {

      ws.resetTransmission();
    }
    else if (msgFromClient.command === 'start') {

      ws.startTransmission();
    }
    else if (msgFromClient.command === 'stop') {

      ws.stopTransmission();
    }
  },

    ws.resetTransmission = function () {

      // here you can place code to reset so a new transmission start from beginning
      msgToClient.command = 'hello';
      msgToClient.counter = 0;

      ws.send(JSON.stringify(msgToClient));
      console.log('transmit hello to client');
    },

    ws.startTransmission = function () {

      //if already ticking don't do anything
      if (msgToClient.command === 'tick') return;
      
      // The transmission in this demo now just a simple counter incrementor send every second
      msgToClient.command = 'tick';
      ws.incrementCounter();
    },

    // The ticker is in this demo now just a counter incrementor
    ws.incrementCounter = function () {

      if (msgToClient.command === 'tick') {

        msgToClient.counter++;
        ws.send(JSON.stringify(msgToClient));
        console.log('transmit tick to client');

        setTimeout(ws.incrementCounter, 1000);
      }
    },

    ws.stopTransmission = function () {

      // here you can place code to stop or paus transmission, it will be resumed on a start message
      msgToClient.command = 'stop';

      ws.send(JSON.stringify(msgToClient));
      console.log('transmit stop to client');
    });
});
