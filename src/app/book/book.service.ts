import { Injectable } from '@angular/core';
import { Row } from './fields';
import { ADDRESSPLACEHOLDERS, ADDRESSES } from './mock-addresses';

@Injectable()
export class BookService {
  getAddresses(): Promise<Row[]> {
    const localAddresses = window.localStorage.getItem('addresses');
    if (localAddresses) {
      return Promise.resolve(JSON.parse(decodeURIComponent(localAddresses)));
    }
    return Promise.resolve(ADDRESSES);
  }

  // to semulate a slow connection
  getAddressesSlowly(): Promise<Row[]> {
    return new Promise(resolve => {
      setTimeout(() => resolve(this.getAddresses()), 0);
    });
  }

  getAddressesPlaceholders(): Row[] {
    return ADDRESSPLACEHOLDERS;
  }

  getAddress(id: string): Promise<Row> {
    return this.getAddresses().then(addresses => addresses.find(addr => addr.fields.id.value === id));
  }
}
