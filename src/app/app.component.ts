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
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
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
      console.log('roleId', roleId);
    });
  }

  onSubmit(): void {
    console.log('onSubmit', this.registerForm.value);
    this.isSubmitted = true;
  }
}
