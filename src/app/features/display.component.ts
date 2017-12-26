import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import {AppState} from './app-state';


@Component({
  selector: 'app-display',
  template: '<p>{{result}}</p>',
})

export class DisplayComponent {

  value$: Observable<number>;
  result: number;

  constructor(private store: Store<AppState>) {
    this.value$ = this.store.select('counter');
    this.value$.subscribe((value: number) => {
        this.result = value;
    });
  }
}
