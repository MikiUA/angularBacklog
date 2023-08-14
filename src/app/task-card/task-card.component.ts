import { Component, Input } from '@angular/core';
import { Task } from '../services/TaskClass';
import { calculateColor } from '../services/coloring';
import { TasksService } from '../services/tasks.service';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.css']
})
export class TaskCardComponent {
  @Input() task!: Task;
  borderColor = 'rgb(0,0,0)'
  constructor(
    private tasksService: TasksService
  ) {
    const wait = () => {
      if (!this.task) setTimeout(() => wait(), 1);
      else this.borderColor = calculateColor(this.task.priority);
    }
    wait();
  }
  open() { this.tasksService.selectTask(this.task) };
  delTask() {
    this.tasksService.removeTask(this.task.label);
  }
}
