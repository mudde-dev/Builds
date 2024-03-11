//Just to ensure we force js into strict mode in HTML scrips - we don't want any sloppy code
'use strict';  // Try without strict mode

//https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API
//https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API/Writing_WebSocket_client_applications

//https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API/Writing_WebSocket_servers

//to see how to implement server  i C#
//https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API/Writing_WebSocket_server   
//https://docs.microsoft.com/en-us/aspnet/core/fundamentals/websockets?view=aspnetcore-6.0

//to see how to implement server  i java
//https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API/Writing_a_WebSocket_server_in_Java

//Connection is now established
const socket = new WebSocket('ws://localhost:3000');


socket.onmessage = event => {

  //recieved a new message
  const msg = JSON.parse(event.data);
  
  //in this case simply increment a counter, the server will do the same so I can see a continous sequence ov even numbers
  msg.counter = Number(msg.counter) + 1;

  //Insert the counter into the DOM
  msg.strng += `${msg.counter}-`;
  const html = `<p> ${msg.strng} </p>`;
  document.getElementById('output').innerHTML = html;

  //send the reply
  socket.send(JSON.stringify(msg));
};
