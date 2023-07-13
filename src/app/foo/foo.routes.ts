import { Route } from '@angular/router';
import { FooComponent } from './foo.component';

export const routes: Route[] = [
  {
    path: '',
    component: FooComponent,
    providers: [provideEffects(), provideState(), FooService],
  },
];
