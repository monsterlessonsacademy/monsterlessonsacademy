import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'foo',
    loadChildren: () => import('./foo/foo.routes').then((m) => m.routes),
  },
];
