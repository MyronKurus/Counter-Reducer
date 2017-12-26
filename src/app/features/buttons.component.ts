import { Component} from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from './app-state';

@Component({
  selector: 'app-buttons',
  template: `
    <div class="buttons">
      <button type="button" (click)="onDecrement()">Decrement</button>
      <button type="button" (click)="onReset()">Reset</button>
      <button type="button" (click)="onIncrement()">Increment</button>
    </div>
  `
})
export class ButtonsComponent {

  constructor(private store: Store<AppState>) {
  }

  onIncrement(): void {
    this.store.dispatch({type: 'INCREMENT'});
  }

  onDecrement(): void {
    this.store.dispatch({type: 'DECREMENT'});
  }

  onReset(): void {
    this.store.dispatch({type: 'RESET'});
  }
}
