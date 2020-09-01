import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState, selectCurrentCount } from '../../reducers';
import { Observable } from 'rxjs';
import * as actions from '../../actions/counter.actions';
@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  current$: Observable<number>;
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.current$ = this.store.pipe(
      select(selectCurrentCount)
    );
  }

  increment(): void {
    // this.current += 1;
    this.store.dispatch(actions.countIncremented());
  }

  decrement(): void {
    this.store.dispatch(actions.countDecremented());
  }

  reset(): void {
    this.store.dispatch(actions.countReset());
  }

}
