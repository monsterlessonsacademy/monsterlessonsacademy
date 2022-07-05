import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { PostInterface } from '../types/post.interface';

@Injectable()
export class PostsService {
  getPosts(): Observable<PostInterface[]> {
    const posts = [
      { id: '1', title: 'First post' },
      { id: '2', title: 'Second post' },
      { id: '3', title: 'Third post' },
    ];
    return of(posts).pipe(delay(2000));
  }
}
