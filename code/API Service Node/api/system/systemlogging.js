'use strict';

exports.servicestart = function () {
  console.log('\n+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+');
  console.log('||                                             ||');
  console.log('|          TRON EUROPE PROJECT -TERA-           |');
  console.log('||                                             ||');
  console.log('+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n');
  console.log(' Starttime: ' + Date() );
  console.log(' Hostname: ' + process.env.HOSTNAME);
  console.log(' Port: ' + process.env.PORT);
};
