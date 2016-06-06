import { Component, Input, ChangeDetectionStrategy, ChangeDetectorRef } from "@angular/core";
import { BearState } from "./BearStore";
import { Observable } from "rxjs/observable";
import { DomSanitizationService } from "@angular/platform-browser";

@Component({
  selector: "tiny-bear",
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <img src='img/tiny-bear.png'
         [style.transform]="transform()"
         [style.opacity]='opacity'
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
  checks = 0;
  opacity = 0.2;

  constructor(private sanitizer: DomSanitizationService,
    private cd: ChangeDetectorRef) {
  }

  transform() {
    return this.sanitizer.bypassSecurityTrustStyle(
        `translate3d(${this.bear.x}px, ${this.bear.y}px, 0)`);
  }

  ngOnChanges() {
    this.opacity = 1;

     window.requestAnimationFrame(() => {
      this.opacity = 0.2;
      this.cd.markForCheck();
    });
  }

}
