import {NgModule} from '@angular/core'
import {LoginComponent} from './login/login.component'
import { Routes, RouterModule } from '@angular/router';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RegistrationComponent} from './register/register.component'
import {LogoutComponent} from './logout/logout.component'

import { from } from 'rxjs';
const routes: Routes = [
    {path: 'user/registration',component:RegistrationComponent},
    {path: 'user/login',component:LoginComponent},
    {path: 'user/logout',component:LogoutComponent},
];
@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        FormsModule
    ],
    declarations:[
        LoginComponent,
        RegistrationComponent,
        LogoutComponent
    ]
})

export class UserModule{

}