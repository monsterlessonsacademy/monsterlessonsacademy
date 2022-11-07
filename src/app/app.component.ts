import { Component } from '@angular/core';
import { combineLatest, map, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  currentPage$ = of(1);
  foo$ = of(2);
  bar$ = of(3);

  data$ = combineLatest([this.currentPage$, this.foo$, this.bar$]).pipe(
    map(([currentPage, foo, bar]) => ({
      currentPage,
      foo,
      bar,
    }))
  );
}
