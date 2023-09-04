import { Rect } from "./rect";
import { Tetrominoes } from "./tetrominoes";

export class I extends Tetrominoes {
  constructor(x: number, y: number, color: string) {
    super(x, y, color);
  }

  draw(c: CanvasRenderingContext2D) {
    const rect1 = new Rect(this.x, this.y, super.width, super.height, this.color);
    rect1.draw(c);

    const rect2 = new Rect(this.x + super.width, this.y, super.width, super.height, this.color);
    rect2.draw(c);

    const rect3 = new Rect(this.x + super.width * 2, this.y, super.width, super.height, this.color);
    rect3.draw(c);

    const rect4 = new Rect(this.x + super.width * 3, this.y, super.width, super.height, this.color);
    rect4.draw(c);
  }

  update() {
    super.update();
  }
};
