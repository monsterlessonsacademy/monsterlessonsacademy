import { Component, OnInit } from '@angular/core';
import { Sort } from '@angular/material/sort';
import { UsersDataSource } from '../../services/users.dataSource';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'users-table',
  templateUrl: './usersTable.component.html',
  styleUrls: ['./usersTable.component.css'],
})
export class UsersTableComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'age'];
  dataSource = new UsersDataSource(this.usersService);

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.dataSource.loadUsers({ active: 'id', direction: 'asc' });
  }

  sortUsers(sort: Sort): void {
    this.dataSource.loadUsers(sort);
  }
}
