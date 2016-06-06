import { Component, Input } from "@angular/core";

@Component({
  selector: "bear",
  // TODO ensure bear moves!
  template: `
    <img src='img/bear.png'
         class='bear'
         >
  `,
})
export class Bear {
  // TODO get bear state input

  left() {
    return this.bear.x + "px";
  }
}
