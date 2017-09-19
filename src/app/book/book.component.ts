import {Component, OnDestroy, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Row, Field } from './fields';
import { BookService } from './book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
  providers: [BookService]
})
export class BookComponent implements OnInit, OnDestroy {
  constructor(
    private addressService: BookService,
    private router: Router
  ) {}

  title = 'Address Book';

  sort = 'asc';

  sortFieldName = 'name';

  id = '0';

  addresses: Row[] = [];

  addressPlaceholders: Row[];

  getAddresses(): void {
    this.addressService.getAddressesSlowly().then(addresses => this.addresses = addresses);
  }

  getAddressPlaceholders(): void {
    this.addressPlaceholders = this.addressService.getAddressesPlaceholders();
  }

  toDeleteItems(): void {
    this.addresses = this.addresses.filter(addr => {
      return Object.keys(addr.fields).filter(field => !addr.fields[field].selected).length > 0;
    });
  }

  toUpdateItems(): void {
    const rowsToUpdate = this.addresses.filter(row => row.status === 'toUpdate');
    if (rowsToUpdate.length === 0) {
      window.alert('No address is to be updated!');
      return;
    }
    const ids = [];
    rowsToUpdate.forEach(row => {
      while (this.addresses.filter(addr => addr.fields.id.value === this.id).length > 0) {
        this.id = '' + (parseInt(this.id, 10) + 1);
      }
      ids.push(this.id);
      row.fields.id.value = this.id;
      row.status = 'readable';
    });
    window.alert(`Addresses to be updated will have ID values: ${ids.join(',')}.`);
  }
  toAddItems(): void {
    this.addresses.push({
      status: 'toUpdate',
      fields: {
        id: {
          value: '',
          selected: false,
          editable: false
        },
        name: {
          value: '',
          selected: false,
          editable: true
        },
        location: {
          value: '',
          selected: false,
          editable: true
        },
        office: {
          value: '',
          selected: false,
          editable: true
        },
        phoneOffice: {
          value: '',
          selected: false,
          editable: true
        },
        phoneCell: {
          value: '',
          selected: false,
          editable: true
        }
      }
    });
  }

  logVal(val: String): void {
    window.console.log(val);
  }

  isAllRowFieldsSelected (fields: Object): boolean {
    return Object.keys(fields).filter(field => !fields[field].selected).length === 0;
  }

  setRow(fields: Row, bool: boolean): void {
    Object.keys(fields).forEach(field => fields[field].selected = bool);
  }

  toggleFieldSelectStatus(field: Field): void {
    this.setAllAddressesFieldsSelectStatus(false);
    field.selected = !field.selected;
  }

  toggleRow(fields: Row): void {
    this.setRow(fields, !this.isAllRowFieldsSelected(fields));
  }

  toSeeNotes(): void {
    this.router.navigate(['/note']);
  }

  setAllAddressesFieldsSelectStatus(bool: boolean): void {
    this.addresses.forEach(addr => {
      Object.keys(addr.fields).forEach(field => addr.fields[field].selected = bool);
    });
  }

  isAllFieldsSelected(): boolean {
    let isAllFieldsSelected = true
    for (let i = 0, len = this.addresses.length; i < len; i++) {
      const addr = this.addresses[i];
      const fields = Object.keys(addr.fields);
      for (let j = 0, length = fields.length; j < length; j++) {
        if (addr.fields[fields[j]].selected === false) {
          isAllFieldsSelected = false;
          break;
        }
      }
    }
    return isAllFieldsSelected;
  }

  toggleAllFields(): void {
    if (!this.isAllFieldsSelected()) {
      this.setAllAddressesFieldsSelectStatus(true);
    } else {
      this.setAllAddressesFieldsSelectStatus(false);
    }
  }

  sortColumn(fieldName: string): void {
    this.setAllAddressesFieldsSelectStatus(false);
    let sort = this.sort;
    if (fieldName === this.sortFieldName) {
      sort = sort === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortFieldName = fieldName;
      sort = 'asc';
    }
    this.sort = sort;
    this.addresses = this.addresses.sort((a: any, b: any) => {
      if (sort === 'asc') {
        return a.fields[fieldName].value > b.fields[fieldName].value ? 1 : -1;
      } else {
        return b.fields[fieldName].value > a.fields[fieldName].value ? 1 : -1;
      }
    });
  }

  ngOnInit(): void {
    this.getAddresses();
    this.getAddressPlaceholders();
    window.addEventListener('beforeunload', e => {
      window.localStorage.setItem('addresses', encodeURIComponent(JSON.stringify(this.addresses)));
    });
  }

  ngOnDestroy(): void {
    window.localStorage.setItem('addresses', encodeURIComponent(JSON.stringify(this.addresses)));
  }
}
