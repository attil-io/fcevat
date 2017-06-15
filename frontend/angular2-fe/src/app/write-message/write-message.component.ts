import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessagesService } from "../messages.service";
import { Message } from "../message";

@Component({
  selector: 'app-write-message',
  templateUrl: './write-message.component.html',
  styles: []
})
export class WriteMessageComponent implements OnInit {
  message: Message;

  constructor(private _messagesService: MessagesService,
               private route: ActivatedRoute,
               private router: Router) { 
    this.message = {id : 1, text: "Hello"};
  }

  ngOnInit() {
  }

  saveMessageDetails(){
    this._messagesService.save(this.message);
    let link = ['/messages'];
    this.router.navigate(link);
  }

}
