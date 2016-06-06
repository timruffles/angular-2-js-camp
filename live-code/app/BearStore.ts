import { Injectable } from "@angular/core";
import { Observable } from "rxjs/observable";


@Injectable()
export class BearStore {
  bears: Observable<Observable<BearState>[]>;

  constructor() {
    this.bears = new Observable((observer) => {
      observer.next(this.bearSwarm());
    })
  }

  private bearSwarm() {
    const bears = [];
    const movers = [];

    let n = 600;
    while(n--) {
      const observable = new Observable((observer) => {
        let state = BearState.random();
        observer.next(state);

        movers.push(() => {
          observer.next(state.nudge());
        })
      });

      bears.push(observable);
    }

    for(const mover of movers) {
      mover();
    }

    frame();

    return bears;

    function frame() {
      if(movers.length === 0) {
        window.requestAnimationFrame(frame);
        return;
      }

      const randomIndex = Math.max(Math.round(Math.random() * (movers.length - 1)), 0)
      movers[randomIndex]();

      window.requestAnimationFrame(frame);
    }
  }




}

export class BearState {
  constructor(public x: number, public y: number) {}

  static random() {
    return new BearState(randomInt(1280), randomInt(800));
  }

  nudge() {
    return new BearState(
      bound(this.x  + randomInt(100) - 50, 0, 1280),
      bound(this.y  + randomInt(100) - 50, 0, 800)
    );
  }
}

function bound(x, min: number, max: number) {
  return Math.max(min, Math.min(x, max)); 
}

function randomInt(max: number, min = 0) {
  return min + Math.round(Math.random() * max);
}
