import { Injectable } from "@angular/core";

@Injectable()
export class SubscribeService{
    
  constructor(){
    
  }

    OnSubscribeClicked(type: string){

        // ------Types of subscribe --------------
        //Add user to subscribe
        //send email to the subscription details
        // allow user to access to the services
    
        alert('Thank you for your '+type+' subscribing. You can access the services now.');
      }
}