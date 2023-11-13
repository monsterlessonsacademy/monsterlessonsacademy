import { CommonModule, isPlatformServer } from '@angular/common';
import {
  Component,
  Inject,
  OnInit,
  PLATFORM_ID,
  afterNextRender,
  inject,
} from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
// import { makeStateKey, TransferState } from '@angular/platform-browser';
import { UsersService } from './services/users.service';
import { SortingInterface } from './types/sorting.interface';
import { UserInterface } from './types/user.interface';

@Component({
  selector: 'users-table',
  templateUrl: './usersTable.component.html',
  styleUrls: ['./usersTable.component.css'],
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  providers: [UsersService],
})
export class UsersTableComponent implements OnInit {
  usersService = inject(UsersService);
  fb = inject(FormBuilder);
  platformId = inject(PLATFORM_ID);
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

  constructor() {
    afterNextRender(() => {
      console.log(
        'constructor',
        this.platformId,
        localStorage.getItem('token')
      );
    });
  }

  ngOnInit(): void {
    // if (this.transferState.hasKey(makeStateKey('usersTable'))) {
    //   this.users = this.transferState.get(makeStateKey('usersTable'), []);
    // } else {
    this.fetchData();
    // }
  }

  fetchData(): void {
    this.usersService
      .getUsers(this.sorting, this.searchValue)
      .subscribe((users) => {
        // if (isPlatformServer(this.platformId)) {
        //   this.transferState.set<UserInterface[]>(
        //     makeStateKey('usersTable'),
        //     users
        //   );
        // }
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
