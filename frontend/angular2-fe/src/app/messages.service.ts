import { Injectable } from '@angular/core';
import { Message } from './message';

@Injectable()
export class MessagesService {

  constructor() { }

  getAll() : Message[] {
    return [
        {text: 'Hello, world!'},
        {text: 'Nice day, today!'},
        {text: 'Oh, yeah!'},
    ];
  }

}
