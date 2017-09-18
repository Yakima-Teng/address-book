import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Address Book';

  addresses = [
    {
      status: 'readable',
      id: '501',
      name: 'Khali Zhang',
      location: 'Shanghai',
      office: 'C-103',
      phoneOffice: 'x55778',
      phoneCell: '650-353-1239'
    },
    {
      status: 'disabled',
      id: '',
      name: '',
      location: '',
      office: '',
      phoneOffice: '',
      phoneCell: ''
    },
    {
      status: 'disabled',
      id: '',
      name: '',
      location: '',
      office: '',
      phoneOffice: '',
      phoneCell: ''
    },
    {
      status: 'disabled',
      id: '',
      name: '',
      location: '',
      office: '',
      phoneOffice: '',
      phoneCell: ''
    },
    {
      status: 'disabled',
      id: '',
      name: '',
      location: '',
      office: '',
      phoneOffice: '',
      phoneCell: ''
    },
    {
      status: 'disabled',
      id: '',
      name: '',
      location: '',
      office: '',
      phoneOffice: '',
      phoneCell: ''
    },
    {
      status: 'disabled',
      id: '',
      name: '',
      location: '',
      office: '',
      phoneOffice: '',
      phoneCell: ''
    }
  ];
}
