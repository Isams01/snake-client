
/**
 * Establishes connection with the game server
 */
const { setupInput } = require('./input.js')
const connect  = require('./client.js');
console.log('Connecting...');
connect();
setupInput();


