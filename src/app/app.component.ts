import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PaginationComponent } from './pagination.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PaginationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  currentPage = 1;

  changePage(page: number): void {
    this.currentPage = page;
  }
}
