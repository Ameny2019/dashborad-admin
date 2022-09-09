import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient, private router: Router) { }

  login(user:any){
    return this.http.post(`http://localhost:3000/auth/login`,user)
  }
  register(user:any){
    return this.http.post(`http://localhost:3000/user/CreateUser`,user)
  }

  setConnected(token: string, user: any, state: string) {
    localStorage.setItem("token",token);
    localStorage.setItem('state', state);
    localStorage.setItem('user', JSON.stringify(user));
  }

  isConnected() {
    return localStorage.getItem('token') !== null && localStorage.getItem('token') !== undefined;
  }

  getCoonectedUser() {
    return JSON.parse(localStorage.getItem('user'));
  }

  logoutUser() {
    localStorage.clear();
    this.router.navigate(['/']);
  }


}
