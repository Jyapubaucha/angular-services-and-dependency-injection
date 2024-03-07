import { User } from "../Models/User";

export class UserService{

    users: User[] = [
        new User('Deepak Maharjan','Male', 'Monthly', 'Active'),
        new User('Saru Bardewa','Female','Yearly', 'Inactive'),
        new User('Dipesh Maharjan','Male','Weekly', 'Active')
    ];

    getAllUsers(){
        return this.users;
    }
    
    createUser(name: string, gender: string, subType: string, status: string){
        let user = new User(name, gender, subType, status);
        this.users.push(user);
    }
}