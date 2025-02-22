import { Routes } from '@angular/router';
import { TaskComponent } from './components/task/task.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { LandingComponent } from './components/landing/landing.component';
import { CallbackComponent } from './components/callback/callback.component';

export const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'tasks', component: TaskComponent },
  { path: 'tasks/user/:userId', component: TaskListComponent },
  { path: 'callback', component: CallbackComponent },
  { path: '**', redirectTo: '' },
];
