import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }
  signUpUser(data:any){
    return this.http.post<any>("https://localhost:44362/api/Auth/signup",data)
  }
  loginUser(data:any){
    return this.http.post<any>("https://localhost:44362/api/Auth/login",data)
  }
}
