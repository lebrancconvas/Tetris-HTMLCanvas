export class Tetrominoes {
  x: number;
  y: number;
  color: string;

  constructor(x: number, y: number, color: string) {
    this.x = x;
    this.y = y;
    this.color = color;
  }

  draw(c: CanvasRenderingContext2D) {
    c.beginPath();
  }

  update() {
    this.y += 40;
  }
};
