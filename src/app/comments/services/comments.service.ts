import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CommentInterface } from '../types/comment.interface';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CommentsService {
  constructor(private httpClient: HttpClient) {}

  getComments(): Observable<CommentInterface[]> {
    return this.httpClient.get<CommentInterface[]>(
      'http://localhost:3000/comments'
    );
  }

  // createComment(
  //   text: string,
  //   parentId: string | null = null
  // ): Observable<CommentInterface> {
  //   return from(api.createComment(text, parentId));
  // }

  // updateComment(id: string, text: string): Observable<{ text: string }> {
  //   return from(api.updateComment(id, text));
  // }

  // deleteComment(id: string): Observable<{}> {
  //   return from(api.deleteComment(id));
  // }
}
