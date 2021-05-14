import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models/Task';
import { TaskService } from 'src/app/services/task.service';
import { TASKS } from 'src/assets/moke-data/mock-tasks';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  tasks: Task[];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((data) => {
      this.tasks = data.map(e=>{
        return {
          id: e.payload.doc.id,
          text: e.payload.doc.data()['text'],
          day: e.payload.doc.data()['day'],
          reminder: e.payload.doc.data()['reminder'],
        }
      })
    });
  }

  deleteTask(task: Task) {
    this.taskService.deleteTask(task);
  }

  toggleReminder(task: Task) {
    task.reminder = !task.reminder;
    this.taskService.updateTaskReminder(task);
  }
  onAddTask(task) {
    console.log(task);
    this.taskService.addTask(task);
  }
}
