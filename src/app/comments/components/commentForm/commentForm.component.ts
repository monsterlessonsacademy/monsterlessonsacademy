import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'comment-form',
  templateUrl: './commentForm.component.html',
})
export class CommentFormComponent implements OnInit {
  @Input() submitLabel!: string;
  @Input() hasCancelButton: boolean = false;
  @Input() initialText: string = '';

  @Output()
  handleSubmit = new EventEmitter<string>();

  @Output()
  handleCancel = new EventEmitter<void>();

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      title: [this.initialText, Validators.required],
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    console.log('commentForm');
  }
}
