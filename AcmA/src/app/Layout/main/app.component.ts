import { Component, NgModule, AfterViewInit, AfterViewChecked, ChangeDetectorRef } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap';
import { Subscription } from 'rxjs';
import { Helpers } from 'src/app/Helpers/helpers';


@NgModule({
  imports: [AlertModule.forRoot()],
})
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewChecked {
  ngAfterViewChecked(): void {
    this.helpers.isAuthenticationChanged().subscribe(v => {
      this.cdRef.detectChanges();
      this.authentication = v;
    });  }
  subscription: Subscription;
  authentication: Boolean;
    constructor(private helpers: Helpers,private cdRef : ChangeDetectorRef) {
  }
  title = 'AcmA';
}
