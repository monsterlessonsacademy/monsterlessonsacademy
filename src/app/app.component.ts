import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  input,
  inject
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BehaviorSubject, delay, of, tap } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  template: ` <div>I'm {{ loading$ | async }} {{ response$ | async }}</div> `,
  styleUrl: './app.component.css',
})
export class AppComponent {
  loading$ = new BehaviorSubject(true);

  response$ = of('response').pipe(
    delay(0),
    tap(() => this.loading$.next(false)),
  );

}
