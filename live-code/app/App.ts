import { Component } from "@angular/core";
import { GameStore } from "./GameStore";
import { GameScreen } from "./GameScreen";
import { Bear } from "./Bear";

@Component({
  selector: "app",
  providers: [GameStore],
  directives: [Bear, GameScreen],
  host: {
    "(window:keydown)": "keydown($event)",
  },
  template: `
    <bear [bear]='game.bear'></bear>
    <game-screen [winning]='game.winning'></game-screen>
  `,
})
export class App {
  constructor(private game: GameStore) {
    game.start();
  }

  keydown(event: KeyboardEvent) {
    if(event.key === "d") {
      this.game.defend();
    }
  }
}
