import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { UsersTableComponent } from './components/usersTable/usersTable.component';
import { UsersService } from './services/users.service';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [UsersTableComponent],
  exports: [UsersTableComponent],
  providers: [UsersService],
})
export class UsersTableModule {}
