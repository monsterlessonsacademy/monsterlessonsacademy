import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  AbstractControl,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Observable, map, of } from 'rxjs';

export const forbiddenNameValidator = (names: string[]): ValidatorFn => {
  return (control: AbstractControl): ValidationErrors | null => {
    return names.includes(control.value)
      ? { forbiddenName: 'Name is not allowed' }
      : null;
  };
};

export const asyncRoleValidator = (
  control: AbstractControl,
): Observable<ValidationErrors | null> => {
  const allowedRoles = ['admin', 'dev'];
  return of(control.value).pipe(
    map((value) => {
      return allowedRoles.includes(value)
        ? null
        : { forbiddenRole: 'Role is not allowed' };
    }),
  );
};

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  fb = inject(NonNullableFormBuilder);
  form = this.fb.group({
    firstname: this.fb.control('', {
      validators: [
        Validators.required,
        Validators.minLength(5),
        forbiddenNameValidator(['foo']),
      ],
    }),
    role: this.fb.control('', { asyncValidators: [asyncRoleValidator] }),
  });

  onSubmit() {
    console.log(this.form.getRawValue());
  }
}
