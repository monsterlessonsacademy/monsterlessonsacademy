import { Component } from '@angular/core';
import { MatPaginatorIntl, PageEvent } from '@angular/material/paginator';
import { PaginatorIntl } from './paginatorIntl.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [{ provide: MatPaginatorIntl, useClass: PaginatorIntl }],
})
export class AppComponent {
  currentPage = 0;

  handlePageEvent(pageEvent: PageEvent) {
    console.log('handlePageEvent', pageEvent);
    this.currentPage = pageEvent.pageIndex;
  }
}
