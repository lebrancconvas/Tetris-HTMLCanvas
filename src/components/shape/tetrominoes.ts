export class Tetrominoes {
  x: number;
  y: number;
  color: string;
  width: number;
  height: number;

  constructor(x: number, y: number, color: string) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.width = 40;
    this.height = 40;
  }

  draw(c: CanvasRenderingContext2D) {
    c.beginPath();
  }

  update() {
    this.y += 40;
  }
};
