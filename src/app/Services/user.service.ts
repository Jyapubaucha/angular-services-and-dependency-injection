import { Injectable, EventEmitter } from "@angular/core";
import { User } from "../Models/User";
import { LoggerService } from "./logger.service";

@Injectable()
export class UserService {

    users: User[] = [
        new User('Deepak Maharjan','Male', 'Monthly', 'Active'),
        new User('Saru Bardewa','Female','Yearly', 'Inactive'),
        new User('Dipesh Maharjan','Male','Weekly', 'Active')
    ];

    constructor(private logger: LoggerService){

    }

    OnUserDetailsClicked: EventEmitter<User> = new EventEmitter<User>();
    
    OnShowUserDetails(user: User){
        this.OnUserDetailsClicked.emit(user);
    }

    getAllUsers(){
        return this.users;
    }

    createUser(name: string, gender: string, subType: string, status: string){
        let user = new User(name, gender, subType, status);
        this.users.push(user);
        this.logger.LogMessage(name, status);
    }

}