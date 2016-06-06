import { Component, Input, ChangeDetectionStrategy } from "@angular/core";
import { BearState } from "./BearStore";
import { Observable } from "rxjs/observable";
import { DomSanitizationService } from "@angular/platform-browser";

@Component({
  selector: "tiny-bear",
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <img src='img/tiny-bear.png'
         [style.transform]="transform()" 
         >
  `,
  styles: [`
    img {
      position: absolute;
      transform: translate3d(0,0,0);
    }
  `],
})
export class TinyBear {
  @Input() bear: BearState;
  constructor(private sanitizer: DomSanitizationService) {
  }

  transform() {
    return this.sanitizer.bypassSecurityTrustStyle(
        `translate3d(${this.bear.x}px, ${this.bear.y}px, 0)`);
  }

}
