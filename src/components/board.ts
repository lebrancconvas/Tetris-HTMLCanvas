export class Board {
  x: number;
  y: number;
  width: number;
  height: number;
  centerPoint: {centerX: number, centerY: number}

  constructor(x: number, y: number, width: number, height: number) {
    this.x = x; // x position
    this.y = y; // y position
    this.width = width; // width of board
    this.height = height; // height of board
    this.centerPoint = {
      centerX: this.x + (this.width / 2),
      centerY: this.y - (this.height / 2)
    }
  }

  draw(c: CanvasRenderingContext2D) {
    c.fillStyle = 'Black';
    c.fillRect(this.x, this.y, this.width, this.height);
  };
};
