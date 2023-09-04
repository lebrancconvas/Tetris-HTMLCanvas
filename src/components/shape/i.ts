import { Rect } from "./rect";

export class I {
  x: number;
  y: number;
  color: string;

  constructor(x: number, y: number, color: string) {
    this.x = x;
    this.y = y;
    this.color = color;
  }

  draw(c: CanvasRenderingContext2D) {
    const rectWidth = 40;
    const rectHeight = 40;

    const rect1 = new Rect(this.x, this.y, rectWidth, rectHeight, this.color);
    rect1.draw(c);

    const rect2 = new Rect(this.x + rectWidth, this.y, rectWidth, rectHeight, this.color);
    rect2.draw(c);

    const rect3 = new Rect(this.x + rectWidth * 2, this.y, rectWidth, rectHeight, this.color);
    rect3.draw(c);

    const rect4 = new Rect(this.x + rectWidth * 3, this.y, rectWidth, rectHeight, this.color);
    rect4.draw(c);
  }
};
