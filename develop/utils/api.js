const axios = require("axios")
const api = {
  getUser(username) {
    
    const queryURL = `https://api.github.com/users/${username}`;
    return axios
    .get(queryURL)
      .catch(error, function() {
        if (error) throw error;
      });
  }
};

module.exports = api;
