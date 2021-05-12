import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/models/Task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  text:string;
  day: string;
  reminder : boolean = false;
  constructor() { }

  @Output() onAddTask: EventEmitter<Task>= new EventEmitter();

  ngOnInit(): void {
  }

  onSubmit(){
    if(!this.text){
      alert('Please add task');
      return;
    }
    const newTask ={
      text:this.text,
      day:this.day,
      reminder: this.reminder
    }

    this.onAddTask.emit(newTask);
    
    // clearning the texts
    this.text='';
    this.day=''
    this.reminder= false;
  }

}
