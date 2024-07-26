import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  apiUrl='http://localhost:5000/api/user/';

  constructor( private https:HttpClient) { }
  
  ngOnInit():void{}

  fetchAllGetApp(){
    return this.https.get<any>(this.apiUrl+'all-users').pipe(map((respons:any) =>{
      return respons;
    }))
  }
 
}
