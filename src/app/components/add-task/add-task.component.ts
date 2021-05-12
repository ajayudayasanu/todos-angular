import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { Task } from 'src/app/models/Task';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  text:string;
  day: string;
  reminder : boolean = false;
  showAddtask: boolean;
  onToggleSubscription: Subscription;
  constructor(private uiService: UiService) { 
    this.onToggleSubscription =this.uiService.onToggle().subscribe(
      value =>{
        this.showAddtask=value;
      }
    )
  }

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
