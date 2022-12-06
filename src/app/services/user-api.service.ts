import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class UserApiService {
  url = "https://raw-tutorial.s3.eu-west-1.amazonaws.com/patients.json";
  usersArray: any[]=[];

  constructor(private http: HttpClient) { }

  users(){
    this.http.get(this.url).subscribe((data:any)=>{
      // console.log(data);
      this.usersArray = data.slice(0, 11);
    }, err => {console.log(err)}
    )

    }
  }


