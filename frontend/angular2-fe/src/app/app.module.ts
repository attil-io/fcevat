import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MessagesListComponent } from './messages-list/messages-list.component';
import { MessageDetailsComponent } from './message-details/message-details.component';

@NgModule({
  declarations: [
    AppComponent,
    MessagesListComponent,
    MessageDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
