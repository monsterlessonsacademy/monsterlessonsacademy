import {
  Component,
  inject,
  resource,
  ResourceStatus,
  signal,
} from '@angular/core';
import {
  FormBuilder,
  NonNullableFormBuilder,
  ReactiveFormsModule,
} from '@angular/forms';

type Post = {
  id: number;
  title: string;
};

@Component({
  selector: 'app-root',
  imports: [ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  fb = inject(NonNullableFormBuilder);
  searchForm = this.fb.group({
    searchValue: '',
  });
  searchValue = signal<string>('');
  postsResource = resource<Post[], { searchValue: string }>({
    request: () => ({
      searchValue: this.searchValue(),
    }),
    loader: ({ request, abortSignal }) =>
      fetch(`http://localhost:3004/posts?title_like=${request.searchValue}`, {
        signal: abortSignal,
      }).then((res) => res.json()),
  });
  onSearchSubmit(): void {
    this.searchValue.set(this.searchForm.getRawValue().searchValue);
  }
  addPost(): void {
    this.postsResource.set([
      ...(this.postsResource.value() ?? []),
      { id: 4, title: 'node js' },
    ]);
  }

  resourceStatus = ResourceStatus;
}
