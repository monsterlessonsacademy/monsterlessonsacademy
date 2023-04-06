import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppStateInterface } from 'src/app/types/appState.interface';
import * as PostsActions from '../../store/actions';
import {
  errorSelector,
  isLoadingSelector,
  postsSelector,
} from '../../store/selectors';
import { PostInterface } from '../../types/post.interface';
import { PostsStore } from './posts.store';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  providers: [PostsStore],
})
export class PostsComponent implements OnInit {
  addForm = this.fb.nonNullable.group({
    title: '',
  });
  vm$ = this.postsStore.vm$;

  constructor(private fb: FormBuilder, private postsStore: PostsStore) {}

  ngOnInit(): void {
    this.postsStore.getPosts();
  }
  onAdd(): void {
    this.postsStore.createPost(this.addForm.getRawValue());
    this.addForm.reset();
  }
}
