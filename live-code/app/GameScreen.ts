import { Component, Input } from "@angular/core";

@Component({
  selector: "game-screen",
  template: `
    <img [src]='background()'
         >
  `,
})
export class GameScreen {
  @Input() winning: boolean;

  background() {
    return `img/${this.winning ? "winning" : "lost" }.jpg`;
  }

}
