import { Component, Inject } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';
import { USER_TOKEN } from 'src/app/app.module';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  // providers: [UserService]
})
export class AdminComponent {

  constructor(@Inject(USER_TOKEN) private userService: UserService){
    
  }

  // default values
  name: string = '';
  gender: string = 'Male';
  subType: string = 'yearly';
  status: string = 'active';

  createNewUser(){
    this.userService.createUser(this.name, this.gender, this.subType, this.status);
    console.log(this.userService.users);
  }


}
