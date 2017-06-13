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

export const appRouterModule = RouterModule.forRoot(routes);

