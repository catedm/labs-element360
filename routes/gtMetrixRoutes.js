const keys = require('../config/keys');
const gtmetrix = require('gtmetrix')({
  email: keys.GTMetrixEmail,
  apikey: keys.GTMetrixAPI
});

module.exports = (app) => {
  app.post('/api/gtmetrix', async (req, res) => {

    // Run test from London with Google Chrome
    const testDetails = {
      url: req.body.url,
      location: 4,
      browser: 3
    };

    // create the test and get the test id
    const creationDetails = await gtmetrix.test.create(testDetails).catch((err) => console.log(err));

    console.log(creationDetails.test_id);

    // get the test and send the results
    gtmetrix.test.get(creationDetails.test_id, 5000, function(err, data) {
      res.send(data);
    });
  });
}