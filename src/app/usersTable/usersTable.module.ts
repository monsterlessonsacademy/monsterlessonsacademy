import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UsersTableComponent } from './components/usersTable/usersTable.component';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { UsersService } from './services/users.service';
import { UsersDataSource } from './services/users.dataSource';

@NgModule({
  imports: [CommonModule, MatTableModule, MatSortModule],
  declarations: [UsersTableComponent],
  exports: [UsersTableComponent],
  providers: [UsersService, UsersDataSource],
})
export class UsersTableModule {}
