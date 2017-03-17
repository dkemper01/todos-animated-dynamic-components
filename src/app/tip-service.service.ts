import { Injectable } from '@angular/core';
import { Tip } from './tip';
import { TipComponent } from './tip/tip.component'

@Injectable()
export class TipService {

  constructor() { }

  getTips() {
    return [
      new Tip(TipComponent, { tip: "A dynamically loaded tip just arrived." }),
      new Tip(TipComponent, { tip: "Yet another dynamically loaded tip worked flawlessly." })
    ]
  }
}
