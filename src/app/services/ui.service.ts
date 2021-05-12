import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})  
export class UiService {

  private showTask: boolean = false;
  private togglesubject = new Subject<any>();

  constructor() { }

  toggleAddTask(): void {
    this.showTask = !this.showTask;
    this.togglesubject.next(this.showTask);
  }

  onToggle() :Observable<any>{
    return this.togglesubject.asObservable();
  }
}
