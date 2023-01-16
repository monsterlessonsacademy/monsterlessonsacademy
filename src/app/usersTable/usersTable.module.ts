import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { UsersTableComponent } from './components/usersTable/usersTable.component';
import { UsersService } from './services/users.service';

const routes: Routes = [
  {
    path: 'users-table',
    component: UsersTableComponent,
  },
];

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, RouterModule.forChild(routes)],
  declarations: [UsersTableComponent],
  exports: [UsersTableComponent],
  providers: [UsersService],
})
export class UsersTableModule {}
