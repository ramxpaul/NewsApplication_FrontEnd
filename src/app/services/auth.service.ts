import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl='http://localhost:3000/'

  constructor(private http:HttpClient) { }

  signUp(credential:any){
    return this.http.post(this.baseUrl+'reporter',credential)
  }

  login(credential:any){
   return this.http.post(this.baseUrl+'reporter/login',credential)
  }

  logout(){
    return this.http.delete(this.baseUrl+'logout')
  }

  getToken(){
    return localStorage.getItem('token')
  }

  logoutAll(){
    return this.http.delete(this.baseUrl+'logoutAll')
  }
}
