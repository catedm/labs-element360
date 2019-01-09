const keys = require('../config/keys');

module.exports = (app) => {
  app.get('/api/gtmetrix', (req, res) => {
    res.send('test');    
  });
}