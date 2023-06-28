import { Component, inject, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { UsersService } from './users.service';
import { CommonModule } from '@angular/common';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ArticleInterface } from './article.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
})
export class AppComponent {
  usersService = inject(UsersService);
  http = inject(HttpClient);
  searchSig = signal<string>('');
  articles$ = toObservable(this.searchSig).pipe(
    debounceTime(300),
    distinctUntilChanged(),
    switchMap((searchValue) =>
      this.http.get<ArticleInterface[]>(
        `http://localhost:3004/articles?title_like=${searchValue}`
      )
    )
  );
  articlesSig = toSignal(this.articles$);

  search(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.searchSig.set(value);
  }
}
