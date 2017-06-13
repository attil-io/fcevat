import { Component, OnInit } from '@angular/core';
import { MessagesService } from "../messages.service";
import { Message } from '../message';

@Component({
  selector: 'app-messages-list',
  template: `
  <ul>
    <li *ngFor="let message of messages">
      <a href="#" (click)="selectMessage(message)">
        {{message.text}}
      </a>
    </li>
  </ul>
  <section *ngIf="selectedMessage">
    <h2>{{selectedMessage.text}}</h2>
  </section>

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
