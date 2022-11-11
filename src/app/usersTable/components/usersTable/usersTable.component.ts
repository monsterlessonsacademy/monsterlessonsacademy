import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { UsersService } from '../../services/users.service';
import { SortingInterface } from '../../types/sorting.interface';
import { UserInterface } from '../../types/user.interface';

@Component({
  selector: 'users-table',
  templateUrl: './usersTable.component.html',
  styleUrls: ['./usersTable.component.scss'],
})
export class UsersTableComponent implements OnInit {
  columns: Array<keyof UserInterface> = ['id', 'name', 'age'];
  sorting: SortingInterface = {
    column: 'id',
    order: 'asc',
  };
  users: UserInterface[] = [];
  searchValue: string = '';
  searchForm = this.fb.nonNullable.group({
    searchValue: '',
  });

  constructor(private usersService: UsersService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
    this.usersService.getUsers(this.sorting, this.searchValue).subscribe((users) => {
      this.users = users;
    });
  }

  capitalize(str: string): string {
    return str.charAt(0).toUpperCase() + str.substring(1);
  }

  isDescSorting(column: string): boolean {
    return this.sorting.column === column && this.sorting.order === 'desc';
  }

  isAscSorting(column: string): boolean {
    return this.sorting.column === column && this.sorting.order === 'asc';
  }

  sortTable(column: string): void {
    const futureSortingOrder = this.isDescSorting(column) ? 'asc' : 'desc';
    this.sorting = {
      column,
      order: futureSortingOrder,
    };
    this.fetchData();
  }

  onSearchSubmit(): void {
    this.searchValue = this.searchForm.value.searchValue ?? '';
    this.fetchData();
  }
}
