// global definition
var
  // native http libary
  http = require('http');

// get blockchain data from fullnode
exports.get_blockchain_data = function (req, res, method ,path) {
   // define parameter
   var options = {
      // fullnode ip address
      host: process.env.FULLNODE,
      // fullnode port
      port: process.env.FULLNODE_PORT,
      // url request
      path: path,
      // http method get/post
      method: method,
      // global timeout
      timeout: 2000,
      // header information
      headers: {
          // format json
          accept: 'application/json'
        }
    };
    // get http request
    http.request(options, function(fn_res){
        // define response var
        var fn_data = '';
        // action get data
        fn_res.on('data', function(data){
            // paging data
            fn_data += data;
        });
        // action response done
        fn_res.on('end', function () {
            // set response header
            res.setHeader('Content-Type', 'application/json');
            // return result
            res.send(fn_data);
        });
    }).end();
};
