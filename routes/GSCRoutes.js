const { google } = require('googleapis');
const keys = require('../config/keys');
const searchconsole = google.searchconsole('v1');
const base64Img = require('base64-img');
const fs = require('fs');

// google search console routes
module.exports = (app) => {
  app.post('/api/googlesearchconsole', async (req, res) => {

    const results = await searchconsole.urlTestingTools.mobileFriendlyTest.run({
      auth: keys.GoogleSearchConsoleAPI,
      url: req.body.url,
      requestScreenshot: true
    });

    // const screenshot = base64Img.imgSync(`data:image/png;base64,${results.data.screenshot.data}`, '../client/public/images', '1', function(err, filepath) {
    //   console.log(err);
    //   console.log(filepath);
    //   return filepath;
    // });

    let base64String = results.data.screenshot.data;
    
    fs.writeFileSync('client/public/images/screenshot.png', base64String, { encoding: 'base64' }, function (err) {
      console.log('File created');
    });
    
    console.log({
      mobileFriendly: results.data.mobileFriendliness,
    });

    res.send({
      mobileFriendly: results.data.mobileFriendliness,
      screenshotPath: '/images/screenshot.png'
    });

  });
};