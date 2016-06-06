import { Component, Input } from "@angular/core";

@Component({
  selector: "game-screen",
  template: `
    <img [src]='background()'
         >
  `,
})
export class GameScreen {

  // TODO get winning into component

  background() {
    return `img/${this.winning ? "winning" : "lost" }.jpg`;
  }

}
