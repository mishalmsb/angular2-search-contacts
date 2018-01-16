import { htmlTemplate } from './phone-book.component.html';
import { Component } from '@angular/core';
import { PhoneBookService, PhoneBook, Contact } from '../../services';

declare var _, $;

@Component({
  selector: 'phone-book',
  template: htmlTemplate
})
export class PhoneBookComponent {

  contacts: Contact[];
  filteredContacts: Contact[];
  searchQuery : string = '';
  order : string = '';

  constructor(private _phoneBookService : PhoneBookService) {}

  ngOnInit() {
    // console.log("Lia Pigford".match("Lia"))
    this.initializeMaterialize();
    this.getPhoneBook();
  }

  initializeMaterialize() {
    // $('select').material_select()
  }

  getPhoneBook() {
    this._phoneBookService.getPhoneBook().subscribe( async (phoneBook: PhoneBook) => {
      this.contacts = await phoneBook.contacts;
      this.filteredContacts = await phoneBook.contacts;
    })
  }

  searchPhoneBook() {
    this.filteredContacts = _.filter(this.contacts, (contact: Contact) => {
      return contact.name.toLowerCase().indexOf(this.searchQuery.toLowerCase()) > -1;
    });
  }

  orderContacts() {
    this.filteredContacts = this.getOrderedContacts();
  }

  getOrderedContacts() {
    if (this.order) {
      return _.orderBy(this.contacts, ['name'],[this.order])
    }
    return this.contacts;
  }
}
