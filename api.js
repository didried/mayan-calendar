exports.longcount = longcount;

function longcount(unix_time) {
  var unix_time = unix_time || Date.now() / 1000;
  var days_since_unix_epoch = unix_time / 86400;
  var days_since_mayan_epoch = days_since_unix_epoch + 11*144000 + 17*7200 + 16*360 + 7*20 + 5; 

  var baktun = Math.floor( (days_since_mayan_epoch / 144000) % 13 ) + 1;
  var katun = Math.floor( (days_since_mayan_epoch / 7200) % 20 );
  var tun = Math.floor( (days_since_mayan_epoch / 360) % 20 );
  var winal = Math.floor( (days_since_mayan_epoch / 20) % 18 );
  var kin = Math.floor( days_since_mayan_epoch % 20 );

  return [baktun, katun, tun, winal, kin].join('.');
}
