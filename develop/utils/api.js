const axios = require("axios")
const api = {
  getUser(username) {
    return axios
    .get(`https://api.github.com/users/${username}`)
      // .catch(error, function() {
      //   if (error) throw error;
      // });
      .catch(err => {
        console.log("we made this error");
        
      })
  }
};

module.exports = api;
