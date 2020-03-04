const api = {
  getUser(username) {
    const queryURL = `https://api.github.com/users/${username}`;
    axios
      .get(queryURL)
      .then(response, function() {
        const data = response.data;
      })
      .catch(error, function() {
        if (error) throw error;
      });
  }
};

module.exports = api;
