import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { UsersTableComponent } from './components/usersTable/usersTable.component';
import { UsersDataSource } from './services/users.dataSource';
import { UsersService } from './services/users.service';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, MatTableModule, MatSortModule],
  declarations: [UsersTableComponent],
  exports: [UsersTableComponent],
  providers: [UsersService, UsersDataSource],
})
export class UsersTableModule {}
