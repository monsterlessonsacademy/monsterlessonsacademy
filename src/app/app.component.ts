import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { QuizFormComponent } from './quizForm/quizForm.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, QuizFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  currentPage = 1;
  changePage(page: number): void {
    this.currentPage = page;
    console.log('changed current page to ', page);
  }

  itemsChange(items: string[]): void {
    console.log('parent itemsChange', items);
  }
}
