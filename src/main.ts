import { canvas, ctx, config } from './canvas';
import { Board } from './components';

// Prepare the canvas.
canvas.width = config.width;
canvas.height = config.height;
canvas.style.backgroundColor = config.backgroundColor;

// Code.

// Title.
ctx.font = '48px Arial';
ctx.fillStyle = 'black';
ctx.textAlign = 'center';
ctx.fillText('Tetris', canvas.width / 2, 100);

// Board.
const boardWidth = 400;
const boardHeight = 600;
const board = new Board((canvas.width - boardWidth) / 2, (canvas.height - boardHeight) / 2, boardWidth, boardHeight);
board.draw(ctx);


