import { Component, Input } from '@angular/core';
import { Task, NewTask } from '../services/TaskClass';
import { TasksService } from '../services/tasks.service';
import { calculateColor } from '../services/coloring';
import { Tag, availibleTags } from '../services/TagType';
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent {
  close: Function;
  private selectedTaskSubscription: Subscription;
  task: Task | NewTask | undefined;
  editable: Task | NewTask;

  constructor(
    private tasksService: TasksService,
  ) {
    this.editable = { label: "" };
    this.close = () => this.tasksService.unselectTask();
    // this.tasksService.selectedTask.subscribe({ next: newVal => this.task = newVal });
    this.selectedTaskSubscription = this.tasksService.selectedTaskChanges$.subscribe(
      (task) => {
        this.task = task;
        // React to the change in selectedTask
      });
    const waitUntilDefined = () => {
      this.task === undefined
        ? setTimeout(() => waitUntilDefined(), 1)
        : this.editable = this.task;
    }
    waitUntilDefined();
  }

  emptyLabelErr = false;
  ok() {
    if (!this.editable.label) return this.emptyLabelErr = true;
    const ok = (this.task && this.task.label !== '') ? this.tasksService.updateTask(this.task.label, new Task(this.editable)) : this.tasksService.addTask(this.editable);
    return ok ? this.close() : 0;
  }


  color = `rgb(255,255,255)`
  colorUpdate() { this.color = calculateColor(this.editable.priority || 0) }


  isCurrentlyAddingTag = false;
  availibleTags = availibleTags;
  currentNewTag: any;
  addTag() {
    const tag = this.currentNewTag;
    if (!this.editable.tags) this.editable.tags = [];
    if (!this.editable.tags.includes(tag)) this.editable.tags.push(tag);
    this.isCurrentlyAddingTag = false;
  }
  removeTag(tag: Tag) {
    const index = this.editable.tags?.findIndex((et) => et === tag)
    if (index === undefined || index < 0) return;
    this.editable.tags?.splice(index, 1);
  }
}
