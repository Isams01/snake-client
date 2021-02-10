const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.on('data', handleUserInput);
  stdin.resume();
  return stdin;
}
const handleUserInput = (key) => {
  if (key === '\u0003') {
    process.exit();
  }
  if(key === '\u001B\u005B\u0044'){
    console.log('left arrow')
  }
  if(key === '\u001B\u005B\u0041'){
    console.log('up arrow')
  }
  if(key === '\u001B\u005B\u0043'){
    console.log('right arrow')
  }
  if(key === '\u001B\u005B\u0042'){
    console.log('down arrow')
  }
  console.log(key);
}

module.exports = { setupInput }