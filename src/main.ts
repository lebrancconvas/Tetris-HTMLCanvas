import { canvas, ctx, config } from './canvas';
import { Board, I, O } from './components';
import { Howl } from 'howler';

// Prepare the canvas.
canvas.width = config.width;
canvas.height = config.height;
canvas.style.backgroundColor = config.backgroundColor;

// Code.

// Audio.
const audio = new Howl({
  src: '/assets/audio/soundtrack/soundtrack_01.mp3'
});
audio.volume(0.5);
// audio.play();

// Title.
ctx.font = '23px Arial';
ctx.fillStyle = 'Black';
ctx.textAlign = 'center';
ctx.fillText('Tetris', canvas.width / 2, 30);

// Board.
const boardWidth = 400;
const boardHeight = 800;
const board = new Board((canvas.width - boardWidth) / 2, (canvas.height - boardHeight) / 2, boardWidth, boardHeight);

// Tetrominos.
const i = new I((canvas.width - boardWidth) / 2, (canvas.height - boardHeight) / 2, 'Green');
const o = new O((canvas.width - boardWidth) / 2, (canvas.height - boardHeight) / 2, 'Blue');

board.draw(ctx);
i.draw(ctx);
o.draw(ctx);

// Game Loop.
setInterval(() => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = 'Black';
  ctx.fillText('Tetris', canvas.width / 2, 30);
  board.draw(ctx);
  if(i.y < (canvas.height - boardHeight) / 2 + boardHeight - 40) {
    i.update();
  }

  if(o.y < (canvas.height - boardHeight) / 2 + boardHeight - 40) {
    o.update();
  }

  i.draw(ctx);
  o.draw(ctx);
}, 1000);
