import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CommentsService } from '../../services/comments.service';
import { ActiveCommentInterface } from '../../types/activeComment.interface';
import { CommentInterface } from '../../types/comment.interface';

@Component({
  selector: 'comments',
  templateUrl: './comments.component.html',
})
export class CommentsComponent implements OnInit {
  @Input() currentUserId!: string;

  comments: CommentInterface[] = [];
  rootComments: CommentInterface[] = [];
  activeComment: ActiveCommentInterface | null = null;

  constructor(private commentsService: CommentsService) {}

  ngOnInit(): void {
    this.commentsService.getComments().subscribe((comments) => {
      this.comments = comments;
      this.rootComments = comments.filter(
        (comment) => comment.parentId === null
      );
    });
  }

  updateComment(): void {}

  deleteComment(): void {}

  setActiveComment(activeComment: ActiveCommentInterface | null): void {
    console.log('setActiveComment', activeComment);
    this.activeComment = activeComment;
  }

  addComment({
    text,
    parentId,
  }: {
    text: string;
    parentId: string | null;
  }): void {
    console.log('addComment', text, parentId);
  }

  getReplies(commentId: string): CommentInterface[] {
    return this.comments
      .filter((comment) => comment.parentId === commentId)
      .sort(
        (a, b) =>
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
      );
  }
}
