// global definition
var
  // blockchain client libary
  request = require('./noderequest');

// blockchain live data request - current block
exports.get_current_block = function(req, res) {
  // fullnode request - current blockchain data
  request.get_blockchain_data(req, res, 'GET','/wallet/getnowblock');
};

// blockchain live data request - fullnode list
exports.get_fullnode_list = function(req, res) {
  // fullnode request - list of all fullnodes
  request.get_blockchain_data(req, res, 'GET','/wallet/listnodes');
};
