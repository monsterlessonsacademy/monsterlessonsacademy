import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { CommentInterface } from '../types/comment.interface';
import * as api from '../api';

@Injectable()
export class CommentsService {
  getComments(): Observable<CommentInterface[]> {
    return from(api.getComments());
  }

  createComment(
    text: string,
    parentId: string | null = null
  ): Observable<CommentInterface> {
    return from(api.createComment(text, parentId));
  }

  updateComment(id: string, text: string): Observable<{ text: string }> {
    return from(api.updateComment(id, text));
  }

  deleteComment(id: string): Observable<{}> {
    return from(api.deleteComment(id));
  }
}
