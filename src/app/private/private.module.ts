import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { AuthGuardService } from '../auth-guard.service';
import { PrivateComponent } from './components/private/private.component';
import { authGuard } from '../auth.guard';

const routes: Routes = [
  {
    path: 'private',
    component: PrivateComponent,
    canActivate: [authGuard],
    // canActivate: [AuthGuardService],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  declarations: [PrivateComponent],
  // providers: [AuthGuardService],
})
export class PrivateModule {}
