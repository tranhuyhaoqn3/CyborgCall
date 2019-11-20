import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { AppConfig } from 'src/app/Config/config';
import {User} from '../../Models/user'
import { Helpers } from 'src/app/Helpers/helpers';
import {ResultApi} from '../../Models/resultAPI'
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  http:HttpClient;
  constructor(private helpers: Helpers,private appConfig:AppConfig,http:HttpClient,private router: Router) { 
    this.http = http;
  }
  private BaseUrl = this.appConfig._config["PathAPI"];
  register(user: User) {
     let result = new ResultApi();
    return this.http.post(this.BaseUrl + '/authenticate/Register', user).toPromise().then(
      (res: any) => {
        result = res;
        return  result;
      }
    )
  }

  login(user: User) {
      return this.http.post(this.BaseUrl + '/authenticate/login', user).toPromise().then(
        (res: any) => {
          this.helpers.setToken(res.token);
          return  true;
        }
      ).catch(
        (error)=>{
          return false;
        }
      )
  }
  logout()
  {
      this.helpers.logout();
      this.router.navigate(['user/login']);
  }
}