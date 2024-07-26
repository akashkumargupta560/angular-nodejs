import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl='http://localhost:5000/api/user/';

  constructor( private https:HttpClient) { }
  
  ngOnInit():void{}

  fetchRegisterApp(data:any):Observable<any>{
    return this.https.post<any>(this.apiUrl+'register',data).pipe(map((respons:any) =>{
      return respons;
    }))
  }
}
