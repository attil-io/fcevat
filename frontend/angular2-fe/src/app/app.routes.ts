import { Routes, RouterModule } from '@angular/router';
import { MessagesListComponent } from './messages-list/messages-list.component';

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
];

export const appRouterModule = RouterModule.forRoot(routes);

