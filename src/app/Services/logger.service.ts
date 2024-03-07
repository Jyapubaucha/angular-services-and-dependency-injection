import { Injectable } from "@angular/core";

//providedIn: root by doing this means the service is injected from root (appmodule)
//not required to add LoggerService in app module
@Injectable({
    providedIn: 'root',
})

export class LoggerService{
    LogMessage(name: string, status: string){
        console.log(`A new user with name ${name} with status ${status} is added to user list`);
    }
}