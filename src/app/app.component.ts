import { Component, ViewChild } from '@angular/core';
import {
  MatPaginator,
  MatPaginatorIntl,
  PageEvent,
} from '@angular/material/paginator';
import { PaginatorIntl } from './paginatorIntl.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [{ provide: MatPaginatorIntl, useClass: PaginatorIntl }],
})
export class AppComponent {
  currentPage = 0;
  handlePageEvent(e: PageEvent) {
    console.log('handlePageEvent', e);
    this.currentPage = e.pageIndex;
  }
}
