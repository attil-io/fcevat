import { Component, OnInit } from '@angular/core';
import { MessagesService } from "../messages.service";
import { Message } from '../message';
import { MessageDetailsComponent } from '../message-details/message-details.component';

@Component({
  selector: 'app-messages-list',
  template: `
  <ul>
    <li *ngFor="let message of messages">
      <a [routerLink]="['/messages', message.id]">
        {{message.text}}
      </a>
    </li>
  </ul>
    <section *ngIf="errorMessage">
      {{errorMessage}}
    </section>

 `,
  styleUrls: ['./messages-list.component.scss']
})
export class MessagesListComponent implements OnInit {
  messages: Message[];
  selectedMessage: Message;
  errorMessage: string = '';

  constructor(private _messagesService: MessagesService) {
  }

  ngOnInit() {
    this._messagesService.getAll().subscribe(msgs => this.messages = msgs, error => this.errorMessage = error);
  }

  selectMessage(message){
      this.selectedMessage = message;
  }

}
