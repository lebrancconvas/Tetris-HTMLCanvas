export class Rect {
  x: number;
  y: number;
  width: number;
  height: number;
  color?: string;

  constructor(x: number, y: number, width: number, height: number, color?: string) {
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      this.color = color;
  }

  draw(c: CanvasRenderingContext2D) {
    c.fillStyle = this.color || 'black';
    c.fillRect(this.x, this.y, this.width, this.height);
  }
};
