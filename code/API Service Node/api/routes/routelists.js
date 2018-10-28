'use strict';

module.exports = function(app) {
  var blockchainData = require('../controllers/blockchain');
  var systemData = require('../controllers/system');

  // get systeminformations - summary
  app.route('/systeminfo')
    .get(systemData.get_systeminfo_summary);

  // get systeminformations - status
  app.route('/systeminfo/status')
    .get(systemData.get_systeminfo_status);

  // get systeminformations - version
  app.route('/systeminfo/swinfo')
    .get(systemData.get_systeminfo_version);

  // get systeminformations - version
  app.route('/systeminfo/servertime')
    .get(systemData.get_systeminfo_time);

  // get systeminformations - uptime
  app.route('/systeminfo/uptime')
    .get(systemData.get_systeminfo_uptime);

  // get systeminformations - hostname
  app.route('/systeminfo/hostname')
    .get(systemData.get_systeminfo_hostname);

  // get systeminformations - database status
  app.route('/systeminfo/dbconnection')
    .get(systemData.get_systeminfo_dbconnection);

    // get blockchaindata - current block
  app.route('/wallet/getnowblock')
    .get(blockchainData.get_current_block)
    .post(blockchainData.get_current_block);

    // get blockchaindata - list of all fullnodes
    app.route('/wallet/listnodes')
      .get(blockchainData.get_fullnode_list)
      .post(blockchainData.get_fullnode_list);

};
