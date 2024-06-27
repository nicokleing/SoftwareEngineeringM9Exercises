const userModel = require('../models/user');

exports.handleConnection = (socket, io) => {
  socket.on('setNickname', (nickname) => {
    userModel.addUser(socket.id, nickname);
    io.emit('users', userModel.getAllUsers());
  });

  socket.on('message', (msg) => {
    socket.broadcast.emit('message', msg);
  });

  socket.on('typing', (isTyping) => {
    const user = userModel.getUser(socket.id);
    socket.broadcast.emit('typing', { user, isTyping });
  });

  socket.on('disconnect', () => {
    const user = userModel.getUser(socket.id);
    socket.broadcast.emit('message', { nickname: 'Server', text: `${user} has disconnected`, timestamp: new Date().toLocaleTimeString() });
    userModel.removeUser(socket.id);
    io.emit('users', userModel.getAllUsers());
  });
};
