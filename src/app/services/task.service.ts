import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { Task } from '../models/Task';
import { AngularFirestore, DocumentChangeAction } from '@angular/fire/firestore';

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

  constructor(private http: HttpClient, private afs: AngularFirestore) {}

  // to get the task
  getTasks(){
   // return this.http.get<Task[]>(this.apiUrl);
    return this.afs.collection('tasks').snapshotChanges();
  }

  //delete tasks
  deleteTask(task:Task){
   // const url= `${this.apiUrl}/${task.id}`
   // return this.http.delete<Task>(url);
   this.afs.doc('tasks/'+task.id).delete();
  }
  //update task reminder

  updateTaskReminder(task:Task){
    //const url= `${this.apiUrl}/${task.id}`
   // return this.http.put<Task>(url,task,httpOptions)
   this.afs.doc('tasks/'+task.id).update(task);
  }

  //add task
  addTask(task: Task) {
   // return this.http.post<Task>(this.apiUrl,task);
    return this.afs.collection('tasks').add(task);
  }

}
