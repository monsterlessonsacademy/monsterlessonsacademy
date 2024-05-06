import { Injectable, inject } from '@angular/core';
import { SharedService } from './shared.service';

@Injectable({
  providedIn: 'root',
})
export class ContactsService {
  constructor(private sharedService: SharedService) {}

  getContacts() {
    console.log(this.sharedService.foo);
    return [
      { id: '1', name: 'Jack' },
      { id: '2', name: 'John' },
      { id: '3', name: 'Mike' },
    ];
  }
}
