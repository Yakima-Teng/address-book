import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { NoteComponent } from './note/note.component';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { ToggleDisableDirective } from './book/toggle-disable.directive';

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    NoteComponent,
    ToggleDisableDirective
  ],
  imports: [
    BrowserModule,
    // import the FormsModule before binding with [(ngModel)]
    FormsModule,
    AppRoutingModule
  ],
  // add servers to providers array
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
