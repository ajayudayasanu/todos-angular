import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models/Task';
import { TaskService } from 'src/app/services/task.service';
import { TASKS } from 'src/assets/moke-data/mock-tasks';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[];

  constructor( private taskService: TaskService) { }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe(
      res=>{
        this.tasks= res;
      }
    )
  }

}
