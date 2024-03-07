import { Component, inject } from '@angular/core';
import { SubscribeService } from 'src/app/Services/subscribe.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
  // providers: [SubscribeService]
})
export class HeroComponent {

  // constructor(private subService: SubscribeService){}
        //OR
  subService = inject(SubscribeService)

  OnSubscribe(){
    this.subService.OnSubscribeClicked('yearly');
  }

}
