import { Injectable } from '@angular/core';
import { Message } from './message';

const MESSAGES : Message[] = [
        {id: 1, text: 'Hello, world!'},
        {id: 2, text: 'Nice day, today!'},
        {id: 3, text: 'Oh, yeah!'},
    ];
@Injectable()
export class MessagesService {

  constructor() { }

  getAll() : Message[] {
    return MESSAGES;
  }

  get(id : number) : Message {
    return MESSAGES.find(p => p.id === id);
  }

}
