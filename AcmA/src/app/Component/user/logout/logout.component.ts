
import { Component, OnInit } from '@angular/core';


import { UserService } from '../user.service';


@Component({

  selector: 'app-logout',

  template:'' 

})
export class LogoutComponent implements OnInit {

  constructor( private userService:UserService) { }  
    ngOnInit() {
      this.userService.logout();
    }
  
  }