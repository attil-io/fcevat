import { Component, OnInit, Input } from '@angular/core';
import { Message } from "../message";

@Component({
  selector: 'app-message-details',
  template: `
   <section *ngIf="selectedMessage">
     <h2>{{selectedMessage.text}}</h2>
   </section>
  `,
  styles: []
})
export class MessageDetailsComponent implements OnInit {
  @Input() selectedMessage: Message;

  constructor() { }

  ngOnInit() {
  }

}
