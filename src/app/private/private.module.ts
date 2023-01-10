import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from '../auth-guard.service';
import { PrivateComponent } from './components/private/private.component';

const routes: Routes = [
  {
    path: 'private',
    component: PrivateComponent,
    canActivate: [AuthGuardService],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  declarations: [PrivateComponent],
})
export class PrivateModule {}
