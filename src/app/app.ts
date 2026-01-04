import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { email, Field, FieldTree, form, required, submit } from '@angular/forms/signals';

const registerNewUser = async (registrationForm: FieldTree<RegisterModel>) => {
  // simulate network latency
  await new Promise((r) => setTimeout(r, 400));

  // fail 1 time out of 2
  const usernameTaken = Math.random() < 1 / 2;
  console.log('usernameTaken', usernameTaken);

  return usernameTaken;
};

type RegisterModel = {
  username: string;
  password: string;
  email: string;
  roleId: string;
};

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [CommonModule, Field],
})
export class App {
  signalRegisterModel = signal<RegisterModel>({
    username: '',
    password: '',
    email: '',
    roleId: '1',
  });
  signalRegisterForm = form(this.signalRegisterModel, (fieldPath) => {
    required(fieldPath.username, { message: 'Username is required' });
    required(fieldPath.password, { message: 'Password is required' });
    required(fieldPath.email, { message: 'Email is required' });
    email(fieldPath.email, { message: 'Enter a valid email address' });
    required(fieldPath.roleId, { message: 'Role is required' });
  });
  roles = [
    { id: 1, title: 'developer' },
    { id: 2, title: 'qa' },
  ];

  onSubmit(event: Event): void {
    event.preventDefault();
    console.log('onSubmit', this.signalRegisterModel());
    submit(this.signalRegisterForm, async () => {
      const response = await registerNewUser(this.signalRegisterForm);
      console.log('API response', response);
      if (response) {
        return [
          {
            kind: 'processing_error',
            message: 'DB down',
          },
        ];
      }
      return undefined;
    });
  }
}
