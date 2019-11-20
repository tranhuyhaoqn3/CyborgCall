import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DocComponent} from '../../Component/doc/doc.component';
import {UserModule} from '../../Component/user/user.module'
import {TemplateComponent} from '../../Component/template/index/template.component'
import {TemplateModule} from '../../Component/template/template.module'
import { from } from 'rxjs';
import { AuthGuard }   from '../../helpers/canActivateAuthGuard';
import { Helpers } from '../../Helpers/helpers';

const routes: Routes = [
  {path: '',component :DocComponent},
  {path: 'template',component :TemplateComponent,canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)
  ,TemplateModule,
  UserModule,
],
  declarations:[
    DocComponent ,TemplateComponent ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
