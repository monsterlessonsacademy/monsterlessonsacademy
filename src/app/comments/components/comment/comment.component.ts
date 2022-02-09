import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActiveCommentInterface } from '../../types/activeComment.interface';
import { ActiveCommentTypeEnum } from '../../types/activeCommentType.enum';
import { CommentInterface } from '../../types/comment.interface';

@Component({
  selector: 'comment',
  templateUrl: './comment.component.html',
})
export class CommentComponent implements OnInit {
  @Input() comment!: CommentInterface;
  @Input() replies!: CommentInterface[];
  @Input() currentUserId!: string;

  @Output()
  setActiveComment = new EventEmitter<ActiveCommentInterface | null>();
  @Output()
  deleteComment = new EventEmitter<string>();
  @Output()
  updateComment = new EventEmitter<{ text: string; commentId: string }>();

  createdAt: string = '';
  isEditing: boolean = false;
  canReply: boolean = false;
  canEdit: boolean = false;
  canDelete: boolean = false;
  activeCommentType = ActiveCommentTypeEnum;

  ngOnInit(): void {
    const fiveMinutes = 300000;
    const timePassed =
      new Date().getMilliseconds() -
        new Date(this.comment.createdAt).getMilliseconds() >
      fiveMinutes;
    this.createdAt = new Date(this.comment.createdAt).toLocaleDateString();
    this.canReply = Boolean(this.currentUserId);
    this.canEdit = this.currentUserId === this.comment.userId && !timePassed;
    this.canDelete =
      this.currentUserId === this.comment.userId &&
      this.replies.length === 0 &&
      !timePassed;
  }
}
