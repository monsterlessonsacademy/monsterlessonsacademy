import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  registerForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    roleId: [1, Validators.required],
  });
  isSubmitted = false;
  roles = [
    { id: 1, title: 'developer' },
    { id: 2, title: 'qa' },
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.registerForm.get('roleId')?.valueChanges.subscribe((roleId) => {
      console.log('SEND API REQUEST AND UPDATE ROLE', roleId);
    });
  }

  onSubmit(): void {
    console.log(
      'submitted form',
      this.registerForm.value,
      this.registerForm.invalid
    );
    this.isSubmitted = true;
  }
}
