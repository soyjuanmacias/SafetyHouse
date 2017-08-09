'use strict';

const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

let count = 0;

io.on('connection', (socket) => {
  console.log('client connected. Total:', ++count);

  socket.on('disconnect', function(){
    console.log('client disconnect. Total:', --count);
  });

  socket.on('notification:security', (message) => {
    console.log('notification:security -->', message);
  });
});

http.listen(3001, () => {
  console.log('started on port 3001');
});
