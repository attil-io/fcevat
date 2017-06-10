import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-messages-list',
  template: `
    <p>
      messages-list Works!
    </p>
  `,
  styleUrls: ['./messages-list.component.scss']
})
export class MessagesListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
