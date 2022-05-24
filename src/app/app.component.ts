import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component } from '@angular/core';

// const enterTransition = transition(':enter', [
//   style({
//     opacity: 0,
//   }),
//   animate('1s ease-in', style({ opacity: 1 })),
// ]);
// const exitTransition = transition(':leave', [
//   style({
//     opacity: 1,
//   }),
//   animate('1s ease-out', style({ opacity: 0 })),
// ]);
// const fadeIn = trigger('fadeIn', [enterTransition]);
// const fadeOut = trigger('fadeOut', [exitTransition]);

// v2
// const fadeInOut = trigger('fadeInOut', [
//   state(
//     'open',
//     style({
//       opacity: 1,
//     })
//   ),
//   state(
//     'close',
//     style({
//       opacity: 0,
//     })
//   ),
//   transition('open => *', [animate('1s ease-out')]),
//   transition('* => open', [animate('1s ease-in')]),
// ]);

const fadeInOut = trigger('fadeInOut', [
  state(
    'in',
    style({
      opacity: 1,
    })
  ),
  transition('void => *', [style({ opacity: 0 }), animate('1s ease-out')]),
  transition('* => void', [animate('1s ease-out'), style({ opacity: 0 })]),
]);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [fadeInOut],
  // animations: [fadeIn, fadeOut],
})
export class AppComponent {
  isShown = false;

  fadeInOut(): void {
    this.isShown = !this.isShown;
  }

  onAnimationStart(event: any) {
    console.log('onAnimationStart', event);
  }

  onAnimationDone(event: any) {
    console.log('onAnimationDone', event);
  }
}
