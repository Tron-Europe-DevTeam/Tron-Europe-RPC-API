// global definition
var
  // incl. environment variables
  globalvar = require('dotenv').config();
  // incl. application url routes
  routes = require('./api/routes/routelists');
  // incl. express libary
  express = require('express'),
  // incl. response libary
  resTime = require('response-time'),
  // incl. systemlogging libary
  sysLog = require('./api/system/systemlogging'),
  // create express instance
  apiService = express();

// define responsetime in response header
apiService.use(resTime());
// handle http requests
routes(apiService);
// global service listener
apiService.listen(process.env.PORT, () => {
    // echo service informations
    sysLog.servicestart();
});

// handle errors
apiService.use(function(req, res) {
    // return 404 http error
    res.status(404).send({
      // responsecode -> Page not found
      url: req.originalUrl + ' - Page not found'
  });
});
