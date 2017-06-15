import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Message } from './message';

@Injectable()
export class MessagesService {
  private baseUrl: string = 'http://172.17.0.2:8080/fcevat/';

  constructor(private http : Http) { }

  getAll() : Observable<Message[]> {
    let messages$ = this.http
      .get(`${this.baseUrl}/messages`, {headers: this.getHeaders()})
      .map(this.mapMessages);
      return messages$;
  }

  private getHeaders() {
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    return headers;
  }

  mapMessages(response:Response): Message[]{
	  return response.json().results.map(this.toMessage)
  }

  toMessage(r:any): Message{
	  let message = <Message>({
                     id: 0,
                     text: r.text
          });
          return message;
  }

  get(id : number) : Message {
    return {id: 0, text: 'hello'};
  }

  save(message: Message){
    // NOP for now
  }

}

