import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  computed,
  inject,
  input,
  Input,
} from '@angular/core';

@Component({
  selector: 'app-user',
  template: `<p>{{ user() }}</p>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class User {
  // @Input() user!: string;
  user = input.required<string>();
  fullName = computed(() => `${this.user()} its a fullname`);
}
