import { Injectable, inject } from '@angular/core';
import { ContactsService } from './contacts.service';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  foo = 'foo';
  constructor(private contactsService: ContactsService) {}

  getContactsNames() {
    return this.contactsService.getContacts().map((contact) => contact.name);
  }
}
