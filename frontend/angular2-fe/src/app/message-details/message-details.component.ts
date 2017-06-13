import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessagesService } from "../messages.service";
import { Message } from "../message";

@Component({
  selector: 'app-message-details',
  template: `
   <section *ngIf="selectedMessage">
     <h2>{{selectedMessage.text}}</h2>
   </section>
   <button (click)="gotoMessagesList()">Back to messages list</button>
  `,
  styles: []
})
export class MessageDetailsComponent implements OnInit {
  selectedMessage: Message;
  sub: any;

  constructor(private messagesService: MessagesService,
               private route: ActivatedRoute,
               private router: Router) { }

  ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
          let id = Number.parseInt(params['id']);
          this.selectedMessage = this.messagesService.get(id);
        });

  }

  ngOnDestroy(){
        this.sub.unsubscribe();
  }

  gotoMessagesList(){
        let link = ['/messages'];
        this.router.navigate(link);
  }


}
