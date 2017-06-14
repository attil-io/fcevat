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
 `,
  styleUrls: ['./messages-list.component.scss']
})
export class MessagesListComponent implements OnInit {
  messages: Message[];
  selectedMessage: Message;

  constructor(private _messagesService: MessagesService) {
  }

  ngOnInit() {
    this.messages = this._messagesService.getAll();
  }

  selectMessage(message){
      this.selectedMessage = message;
  }

}