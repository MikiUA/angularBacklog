import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { TasksService } from '../services/tasks.service';
import { NewTask, Task } from '../services/TaskClass';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  taskList: Task[] = [];
  topTag: string | null = '';
  constructor(
    private route: Router,
    private tasksService: TasksService,
  ) {
    route.events.subscribe(event => event instanceof NavigationEnd && this.getTasks(event.urlAfterRedirects));
  }

  getTasks(path: string): void {
    this.topTag = window.decodeURIComponent(path.slice(1));
    this.taskList = this.topTag === 'all' ?
      this.tasksService.getAllTasks()
      : this.tasksService.getTasksbyTag(this.topTag)
  }
  addTask() { this.tasksService.selectTask(undefined) }
}
