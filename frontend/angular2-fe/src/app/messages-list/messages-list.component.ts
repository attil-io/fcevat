import { Component, OnInit } from '@angular/core';
import { MessagesService } from "../messages.service";
import { Message } from '../message';

@Component({
  selector: 'app-messages-list',
  template: `
  <ul>
    <li *ngFor="let message of messages">
      {{message.text}}
    </li>
  </ul>

 `,
  styleUrls: ['./messages-list.component.scss']
})
export class MessagesListComponent implements OnInit {
  messages: Message[];

  constructor(private messagesService: MessagesService) {
    this.messages = messagesService.getAll();
  }

  ngOnInit() {
  }

}
