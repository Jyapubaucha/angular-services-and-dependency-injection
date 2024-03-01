import { Component } from '@angular/core';
import { SubscribeService } from 'src/app/Services/subscribe.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  providers:[SubscribeService]//2. what to provide
})
export class SidebarComponent {

  //1. How to provide dependencies
  constructor(private subService: SubscribeService){

  }

  OnSubscribe(){
    this.subService.OnSubscribeClicked('quarterly');
  }
}
