import { Component } from '@angular/core';
import {UserApiService} from "./services/user-api.service"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users:any[] = [];
  title = 'practice';
  constructor(public user:UserApiService){

    this.user.users();

    setTimeout(() => {
      this.title = "Khizer Ali";
    }, 2000);
  }

 searchText: string = "";
 
 onSearchTextChanged(searchValue:string){
  this.searchText = searchValue;
  // console.log(this.searchText);
 }

}
