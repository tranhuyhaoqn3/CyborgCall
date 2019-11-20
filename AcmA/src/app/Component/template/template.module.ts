import {NgModule} from '@angular/core';
import {UpdateTemplate} from './update-template/update-template.component';
import {FormsModule} from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import {CommonModule} from '@angular/common';
import { AuthGuard } from 'src/app/helpers/canActivateAuthGuard';
const routesConfig: Routes = [
    {path: 'template/update',component :UpdateTemplate,canActivate: [AuthGuard]},
  ];
@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routesConfig),
        FormsModule
    ],
    declarations:[
        UpdateTemplate,
        ]
})

export class TemplateModule{

}