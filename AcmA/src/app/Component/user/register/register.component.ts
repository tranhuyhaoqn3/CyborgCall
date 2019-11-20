import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/Models/user';
@Component({
    selector: 'app-registration',
    templateUrl: './register.component.html',
    styles: []
  })
  export class RegistrationComponent implements OnInit {  
    constructor(private router: Router,private service: UserService, private toastr: ToastrService){}
    user = new User();
    ngOnInit() {}
    async onSubmit() {
      if(this.user.PassWordConfirm ==  this.user.PassWord){
        let rs = await this.service.register(this.user);
        if(rs.succeeded)
        {
         this.router.navigateByUrl('/template');
         this.toastr.success("Welcome "+this.user.UserName)
        }
        else{
            this.toastr.warning(rs.errors[0].description)
        }
      }
      else{
        this.toastr.warning("The password is not the same");
      }
    }
}