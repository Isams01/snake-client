const net = require('net');

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host: 'localhost',
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 
  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });
  conn.on('connect', () => {
    console.log('got a connection');
  });
  return conn;
}

console.log('Connecting ...');
let connection = connect();

connection.on('data', (data) => {
  console.log('Server says: ', data);
} )

connection.on('connect', () => {
  console.log('got a connection');
})
