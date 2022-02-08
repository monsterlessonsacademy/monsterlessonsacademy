import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'comment-form',
  templateUrl: './commentForm.component.html',
})
export class CommentFormComponent {
  @Input() submitLabel!: string;

  @Output('handleSubmit')
  handleSubmitEvent = new EventEmitter<string>();
}
