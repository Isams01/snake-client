const net = require('net');

const connect = function() {
  const conn = net.createConnection({ 
    host: '10.0.2.15',
    port: 50541 
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 

  // retrieve data from server
  conn.on('data', (data) => {
    console.log('Server says: ', data);
  } )

  // confirm connection to server
  conn.on('connect', () => {
    console.log('got a connection');
    conn.write('Name: IJI');
  })

  return conn;
}


module.exports = connect;
