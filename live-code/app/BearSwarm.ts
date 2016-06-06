import { Component } from "@angular/core";
import { TinyBear } from "./TinyBear";
import { BearStore, BearState } from "./BearStore";
import { Observable } from "rxjs/observable";
import { DomSanitizationService } from "@angular/platform-browser";

@Component({
  selector: "app",
  providers: [BearStore],
  directives: [TinyBear],
  template: `
    <tiny-bear *ngFor='let bear of bears | async'
               [bear]='bear | async'>
    </tiny-bear>
  `,
})
export class BearSwarm {
  bears: Observable<Observable<BearState>[]>;

  constructor(private store: BearStore) {
    this.bears = store.bears;
  }
}
