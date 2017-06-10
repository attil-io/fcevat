import { Component, OnInit } from '@angular/core';
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
  messages: Message[] = [
    {text: 'Hello, world!'},
    {text: 'Nice day, today!'},
    {text: 'Oh, yeah!'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
