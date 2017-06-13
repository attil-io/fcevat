import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MessagesListComponent } from './messages-list/messages-list.component';
import { MessageDetailsComponent } from './message-details/message-details.component';

const routes: Routes = [
  {
    path: 'messages',
    component: MessagesListComponent,
  },
  {
    path: '',
    redirectTo: '/messages',
    pathMatch: 'full'
  },
  {
    path: 'messages/:id',
    component: MessageDetailsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

