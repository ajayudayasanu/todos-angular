import { UiService } from './../../services/ui.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  title: string = 'Task tracker';
  showAddtask: boolean;
  onToggleSubscription: Subscription;
  
  constructor(private uiService: UiService, private router:Router) {
    this.onToggleSubscription =this.uiService.onToggle().subscribe(
      value =>{
        this.showAddtask=value;
      }
    )
  }

  ngOnInit(): void {}

  toggleAddTask() {
    this.uiService.toggleAddTask();
  }

  hasRoute(route:string){
    return this.router.url === route
  }
}
