import { Component, Input, OnInit } from '@angular/core';
import { CommentInterface } from '../../types/comment.interface';

@Component({
  selector: 'comment',
  templateUrl: './comment.component.html',
})
export class CommentComponent implements OnInit {
  @Input() comment!: CommentInterface;
  createdAt: string = '';

  ngOnInit(): void {
    this.createdAt = new Date(this.comment.createdAt).toLocaleDateString();
  }
}
