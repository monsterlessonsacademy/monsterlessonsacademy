import { Component, input } from '@angular/core';

@Component({
  selector: 'app-pages',
  standalone: true,
  imports: [],
  templateUrl: './page.component.html',
  styleUrl: './page.component.css',
})
export class PageComponent {
  pageId = input.required<string>();
  limit = input.required<string>();
  page = input.required<{ pageId: string; name: string }>();
}
