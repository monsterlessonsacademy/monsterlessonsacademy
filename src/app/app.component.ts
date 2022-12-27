import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  searchValue = 'Initial value';
  searchForm = {
    searchValue: 'Initial value',
  };

  modelValueChange(value: string) {
    this.searchValue = value;
  }

  searchValueChange(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.searchValue = value;
  }

  onSearchFormSubmit(): void {
    console.log('onSearchFormSubmit', this.searchForm);
  }
}
