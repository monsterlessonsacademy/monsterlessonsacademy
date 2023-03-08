import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from '../auth.guard';
import { PrivateComponent } from './components/private/private.component';

const routes: Routes = [
  {
    path: 'private',
    component: PrivateComponent,
    canActivate: [authGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  declarations: [PrivateComponent],
})
export class PrivateModule {}
