import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EmployeeService } from './employee.service';
// importing HttpClientModule to make http calls and get observables
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    EmployeeDetailComponent,
  ],
  imports: [
    BrowserModule,
    // adding HttpClientModule in imports array so that its accessible in the app module
    // by just importing HttpClientModule in app module we are also registering it to Angular's Injector
    //  we can access HttpClient services without even adding it in providers array
    HttpClientModule
  ],
  providers: [EmployeeService],
  // App module bootstraps the AppComponent
  bootstrap: [AppComponent]
})
export class AppModule { }
