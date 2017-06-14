import { Component, OnInit } from '@angular/core';
import { Message } from "../message";

@Component({
  selector: 'app-write-message',
  templateUrl: './write-message.component.html',
  styles: []
})
export class WriteMessageComponent implements OnInit {
  message: Message;

  constructor() { 
    this.message = {id : 0, text: "Hello"};
  }

  ngOnInit() {
  }

}
