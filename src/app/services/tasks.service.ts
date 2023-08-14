import { Injectable } from '@angular/core';
import { tasksTEMPORARY } from './testTasks';
import { NewTask, Task } from './TaskClass';
import { Tag } from './TagType';
import { BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  tasks: Task[];
  private selectedTaskSubject = new BehaviorSubject<any>(undefined);
  selectedTaskChanges$ = this.selectedTaskSubject.asObservable();

  private startTimer() {
    const interval = setInterval(() => { console.log(this.selectedTaskSubject.value); }, 1000);
    setTimeout(() => clearInterval(interval), 10000);
  }

  constructor() {
    this.tasks = JSON.parse(localStorage.getItem("backlog list") || '[]');
  }
  private updateStorage() {
    localStorage.setItem('backlog list', JSON.stringify(this.tasks));
    return true;
  }

  selectTask(task: Task | undefined) {
    console.log("select ", task?.label || 'new');
    this.selectedTaskSubject.next(task || { label: "" });
    // this.selectedTask = task;// .next({});

  }
  unselectTask() {
    console.log("unselect", this.selectedTaskSubject);
    this.selectedTaskSubject.next(undefined);
    console.log("unselected", this.selectedTaskSubject);
  }
  getAllTasks() { return this.tasks };
  getTasksbyTag(tag: Tag) {
    return this.tasks.filter((task) => task.tags?.includes(tag));
  }
  getTaskByLabel(label: string) {
    const index = this.tasks.findIndex((task) => task.label = label)
    if (!index) return undefined;
    return this.tasks[index];
  }

  addTask(data: NewTask) {
    console.log("add", data);
    if (this.tasks.some((task) => task.label === data.label)) return false;
    this.tasks.push(new Task(data));
    return this.updateStorage();
  }
  updateTask(label: string, data: Task) {
    const index = this.tasks.findIndex((task) => task.label === label)
    console.log(`update N(${index}) ${label} `, data)
    if (index === -1) return false
    this.tasks[index] = data;
    return this.updateStorage();
  }
  removeTask(label: string) {
    const index = this.tasks.findIndex((task) => task.label === label)
    console.log(`delete N(${index}) ${label} `)
    if (index < 0) return false;
    this.tasks.splice(index, 1)
    return this.updateStorage();
  }
}
