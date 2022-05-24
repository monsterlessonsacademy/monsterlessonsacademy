import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component } from '@angular/core';

// v1 basic
const enterTransition = transition(':enter', [
  style({
    opacity: 0,
  }),
  animate(
    '1s ease-in',
    style({
      opacity: 1,
    })
  ),
]);
const exitTransition = transition(':leave', [
  style({
    opacity: 1,
  }),
  animate(
    '1s ease-out',
    style({
      opacity: 0,
    })
  ),
]);
const fadeIn = trigger('fadeIn', [enterTransition]);
const fadeOut = trigger('fadeOut', [exitTransition]);

// v2 states
// const fadeInOut = trigger('fadeInOut', [
//   state(
//     'open',
//     style({
//       opacity: 1,
//     })
//   ),
//   state(
//     'closed',
//     style({
//       opacity: 0,
//     })
//   ),
//   transition('open => closed', [animate('1s ease-out')]),
//   transition('closed => open', [animate('1s ease-in')]),
// ]);

// v3 wildcards
// const fadeInOut = trigger('fadeInOut', [
//   state(
//     'open',
//     style({
//       opacity: 1,
//     })
//   ),
//   state(
//     'closed',
//     style({
//       opacity: 0,
//     })
//   ),
//   transition('open => *', [animate('1s ease-out')]),
//   transition('* => open', [animate('1s ease-in')]),
// ]);

// v4 animation callbacks
// const fadeInOut = trigger('fadeInOut', [
//   state(
//     'open',
//     style({
//       opacity: 1,
//     })
//   ),
//   state(
//     'closed',
//     style({
//       opacity: 0,
//     })
//   ),
//   transition('* => closed', [animate('1s ease-out')]),
//   transition('* => open', [animate('1s ease-in')]),
// ]);

// v5

// const fadeInOut = trigger('fadeInOut', [
//   state(
//     'in',
//     style({
//       opacity: 1,
//     })
//   ),
//   transition('void => *', [style({ opacity: 0 }), animate('1s ease-out')]),
//   transition('* => void', [animate('1s ease-in'), style({ opacity: 0 })]),
// ]);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // animations: [fadeInOut],
  animations: [fadeIn, fadeOut],
})
export class AppComponent {
  isShown = false;

  fadeInOut(): void {
    this.isShown = !this.isShown;
  }

  onAnimationStart(event: any): void {
    console.log('onAnimationStart', event);
  }

  onAnimationEnd(event: any): void {
    console.log('onAnimationEnd', event);
  }
}
