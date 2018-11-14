const readline = require('readline');

const Game = require('./game');

const [ ,, size = 20, speed = 500 ] = process.argv;

const game = new Game(size);

setInterval(() => {
    let output = game.play();

    readline.cursorTo(process.stdout, 0, 0);
    readline.clearScreenDown(process.stdout);
    
    process.stdout.write(output);
}, speed);