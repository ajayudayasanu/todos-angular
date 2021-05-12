import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { Task } from '../models/Task';

const httpOptions={
  headers: new HttpHeaders({
    'content-Type':'application/json'
  })
}

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private apiUrl = 'http://localhost:5000/tasks';

  constructor(private http: HttpClient) {}

  // to get the task
  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl);
  }

  //delete tasks
  deleteTask(task:Task):Observable<Task>{
    const url= `${this.apiUrl}/${task.id}`
    return this.http.delete<Task>(url);
  }
  //update task reminder

  updateTaskReminder(task:Task):Observable<Task>{
    const url= `${this.apiUrl}/${task.id}`
    return this.http.put<Task>(url,task,httpOptions)
  }

  //add task
  addTask(task: Task):Observable<Task> {
    return this.http.post<Task>(this.apiUrl,task);
  }

}
