import { Injectable } from "@angular/core";

@Injectable()
export class GameStore {
  bear = { x: 0 };
  winning = true;
  interval: any;

  start() {
    this.interval = setInterval(() => {
      this.moveBear(10)
    }, 100);
  }

  defend() {
    this.moveBear(-50);
  }

  private moveBear(d: number) {
    if(!this.winning) {
      return;
    }

    this.bear = Object.assign({
    }, this.bear, {
      x: Math.min(Math.max(-50, this.bear.x + d), 300),
    });

    if(this.bear.x === 300) {
      this.gameOver();
    }
  }

  private gameOver() {
    this.winning = false;
    clearInterval(this.interval);
  }
}
