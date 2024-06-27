const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const path = require('path');
const chatController = require('./controllers/chatController');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.broadcast.emit('message', { nickname: 'Server', text: 'A user has connected', timestamp: new Date().toLocaleTimeString() });
  chatController.handleConnection(socket, io);
});

server.listen(3000, () => {
  console.log('listening on *:3000');
});
