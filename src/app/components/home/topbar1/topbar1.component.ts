import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../services/auth.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-topbar1',
  templateUrl: './topbar1.component.html',
  styleUrls: ['./topbar1.component.css']
})
export class Topbar1Component implements OnInit {

  constructor(private router:Router, public authService: AuthService) { }

  ngOnInit(): void {
  }

  // logout(){
  //   localStorage.removeItem("state");
  //   console.log("here navigate vers home")
  //   this.router.navigateByUrl('home');
  // }
  logout(){
    localStorage.removeItem("state");
    console.log("here navigate vers home")
    this.router.navigateByUrl('');
  }
}
