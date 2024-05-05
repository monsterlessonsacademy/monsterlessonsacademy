import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  input,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BehaviorSubject, delay, of, tap } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  template: ` <div>I'm {{ loading$ | async }} {{ response$ | async }}</div> `,
  styleUrl: './app.component.css',
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  // message: string = 'loading...';
  loading$ = new BehaviorSubject(true);

  response$ = of('response').pipe(
    delay(0),
    tap(() => this.loading$.next(false)),
  );
  constructor(private cdr: ChangeDetectorRef) {}

  ngAfterViewInit() {
    // this.message$.next('all done loading');
    // setTimeout(() => {
    // this.message = 'all done loading';
    // });
    // this.cdr.detectChanges();
  }

  // ngAfterContentChecked() {
  //   this.message = 'all done loading :)';
  // }
}
