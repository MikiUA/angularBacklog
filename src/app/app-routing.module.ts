import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskListComponent } from './task-list/task-list.component';


const routes: Routes = [
  { path: '', redirectTo: '/all', pathMatch: 'full' },
  { path: ':topTag', component: TaskListComponent },
  { path: '**', redirectTo: '/all' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
