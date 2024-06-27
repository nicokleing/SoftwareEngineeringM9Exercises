class User {
    constructor() {
      this.users = {};
    }
  
    addUser(id, nickname) {
      this.users[id] = nickname;
    }
  
    removeUser(id) {
      delete this.users[id];
    }
  
    getUser(id) {
      return this.users[id];
    }
  
    getAllUsers() {
      return Object.values(this.users);
    }
  }
  
  module.exports = new User();
  