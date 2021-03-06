import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MessagesListComponent } from './messages-list/messages-list.component';
import { MessageDetailsComponent } from './message-details/message-details.component';

import { AppRoutingModule } from "./app-routing.module";
import { WriteMessageComponent } from './write-message/write-message.component';

@NgModule({
  declarations: [
    AppComponent,
    MessagesListComponent,
    MessageDetailsComponent,
    WriteMessageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
