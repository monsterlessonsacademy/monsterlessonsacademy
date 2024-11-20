import { Component, input, OnInit, resource, signal } from '@angular/core';

type Post = {
  title: string;
};

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
})
export class ChildComponent implements OnInit {
  readonly isActive = input(false);
  postId = signal(1);

  profileResource = resource<Post, { postId: number }>({
    request: () => ({
      postId: this.postId(),
    }),
    loader: ({ request }) =>
      fetch(`http://localhost:3004/posts/${request.postId}`).then((res) =>
        res.json(),
      ),
  });

  ngOnInit(): void {
    console.log('init child');
  }

  changePostId(): void {
    this.postId.set(2);
  }
}
