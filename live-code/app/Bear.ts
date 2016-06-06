import { Component, Input } from "@angular/core";

@Component({
  selector: "bear",
  template: `
    <img src='img/bear.png'
         class='bear'
         [style.left]='left()'
         >
  `,
  styles: [`
    img {
      position: absolute;
      transform: translate3d(0,0,0);
      top: 25px;
    }
  `],
})
export class Bear {
  @Input() bear: { x: number };


  left() {
    return this.bear.x + "px";
  }
}
