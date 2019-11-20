import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import {UserService} from '../user.service'
import {User} from '../../../Models/user'
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl:'./login.component.html'
})
export class LoginComponent implements OnInit{
    constructor( private router: Router,private service: UserService, private toastr: ToastrService) { }
    user = new User();
    ngOnInit(): void {}
    async onSubmit() {
    let rs = await this.service.login(this.user);
    if(rs == true)
    {
     this.router.navigateByUrl('/template');
     this.toastr.success("Welcome "+this.user.UserName)
    }
    else{
        this.toastr.warning("Incorrect username or password.")
    }
  }
}