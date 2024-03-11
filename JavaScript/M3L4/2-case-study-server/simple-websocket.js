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
  const counter = { counter: 1, strng: '' };

  // send first communication to client
  ws.send(JSON.stringify(counter));

  // on response back
  ws.on('message', message => {

    console.log('recieved message from client');
    const ct = JSON.parse(message);

    //prepare answer message to client
    ct.counter = Number(ct.counter) + 1;
    if (ct.counter < 100) {
      console.log('answering client');
      ws.send(JSON.stringify(ct));
    }
  });
});
