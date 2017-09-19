import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {

  constructor(
    private location: Location
  ) {
  }

  goBack(): void {
    this.location.back();
  }

  ngOnInit() {
  }

}
