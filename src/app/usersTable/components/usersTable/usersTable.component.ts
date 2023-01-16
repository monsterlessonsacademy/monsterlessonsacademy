import { isPlatformServer } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { makeStateKey, TransferState } from '@angular/platform-browser';
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
  platformId: Object;

  constructor(
    private usersService: UsersService,
    private fb: FormBuilder,
    private transferState: TransferState,
    @Inject(PLATFORM_ID) platformId: Object
  ) {
    this.platformId = platformId;
  }

  ngOnInit(): void {
    if (this.transferState.hasKey(makeStateKey('usersTable'))) {
      this.users = this.transferState.get(makeStateKey('usersTable'), []);
    } else {
      this.fetchData();
    }
  }

  fetchData(): void {
    this.usersService
      .getUsers(this.sorting, this.searchValue)
      .subscribe((users) => {
        if (isPlatformServer(this.platformId)) {
          this.transferState.set<UserInterface[]>(
            makeStateKey('usersTable'),
            users
          );
        }
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
