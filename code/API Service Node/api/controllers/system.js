'use strict';

// systeminfo - summary
exports.get_systeminfo_summary = function(req, res) {
      // define result
      res.json({
          // systeminfo
          systeminfo:{
            // application - name
            application: "Tron Europe RPC API",
            // application - version
            version: process.env.API_VERSION,
            // application - release
            release: process.env.API_RELEASE,
            // application - status
            status: process.env.API_STATUS,
            // application - hostname
            hostname: process.env.HOSTNAME,
            // application - uptime
            uptime: process.uptime() + ' Seconds',
            // application - serverdate
            servertime: Date()
          },
          // blockchain data
          blockchain:{
              // fullnodeinfo
              fullnode: {
                // fullnode - hostname
                hostname: process.env.FULLNODE,
                // fullnode - port
                port: process.env.FULLNODE_PORT,
                // fullnode - status
                status: "online"
              },
              // solitynodeinfo
              solitynode: {
                // solitynode - hostname
                hostname: process.env.SOLITYNODE,
                // solitynode -port
                port: process.env.SOLITYNODE_PORT,
                // solitynode - status
                status: "online"
              }
          }
      });

};

// systeminfo - softwareversion
exports.get_systeminfo_version = function(req, res) {
    // define result
    res.json({
        // systeminfo
        systeminfo:{
          // application - name
          application: "Tron Europe RPC API",
          // application - version
          version: process.env.API_VERSION,
          // application - release
          release: process.env.API_RELEASE
        }
    });
};

// systeminfo - status
exports.get_systeminfo_status = function(req, res) {
    // define result
    res.json({
        // systeminfo
        systeminfo:{
          // application - status
          status: process.env.API_STATUS
        }
    });
};

// systeminfo - api node hostname
exports.get_systeminfo_hostname = function(req, res) {
    // define result
    res.json({
        // systeminfo
        systeminfo:{
          // application - hostname
          hostname: process.env.HOSTNAME
        }
    });
};

// systeminfo - node.js api uptime
exports.get_systeminfo_uptime = function(req, res) {
    // define result
    res.json({
        // systeminfo
        systeminfo:{
          // application - uptime
          uptime: process.uptime() + ' Seconds'
        }
    });
};

// systeminfo - servertime
exports.get_systeminfo_time = function(req, res) {
    // define result
    res.json({
        // systeminfo
        systeminfo:{
          // application - serverdate
          servertime: Date()
        }
    });
};

// systeminfo - api node database connection state
exports.get_systeminfo_dbconnection = function(req, res) {
    // incl. postgresql libary
    const { Client } = require('pg');
    // create client instance
    const client = new Client();
    // create database connection
    client.connect()
      // status -> success
      .then( function () {
          // define result
          res.json({
             // systeminfo
             systeminfo:{
               // dbinfo - state
               dbconnection: "connected"
             }
          });
          // close db connection
          client.end();
      })
      // status -> error
      .catch(function (err) {
          // define result
          res.json({
             // systeminfo
             systeminfo:{
               // dbinfo - state
               dbconnection: "disconnected",
               // dbinfo - errorcode
               errorcode: err.code,
               // dbinfo - errormessage
               errormessage: err.message
             }
          })
       });
};
