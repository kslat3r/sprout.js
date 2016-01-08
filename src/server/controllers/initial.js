var nconf = require('nconf');

module.exports = {
  index: function(req, res) {
    var initialData = {
      config: {
        apiUrl: nconf.get('apiUrl')
      },
      auth: {
        user: req.user && req.user.profile ? req.user.profile : undefined
      }
    };

    res.send('window.initialData = ' + JSON.stringify(initialData) + ';');
  }
};