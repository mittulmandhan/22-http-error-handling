import { EmployeeService } from '../employee.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

  // local variable that will stroe the fetched data
  public employees;
  // local variable that will store an error message in case we face some error
  public errorMsg;

  // we declared a private local variable _employeeService that gives us an instance of EmployeeService
  constructor(private employeeService: EmployeeService ) { }
  // now that we have instance of EmployeeService now we ae going to use this instance to fetch the employee data
  // and the code for that goes inside the ngOnInit() life cycle  hook
  // ngOnInit() hook gets called once the component has been initialized

  ngOnInit() {
    // calling getEmployees() method to get the employees' data
    this.employeeService.getEmployees()
      // an observable does not provide the data unless the component subscribes to it
      // so subscribing to the observable and storing the fetched data in a local variable i.e. employees
     // in the paranthesis we used a fat arrow function to assign the received data to the local variable i.e. employees
     // In second argument we have a fat arrow function which will deal with the error scenario
     .subscribe(data => {
       return this.employees = data;
     },
                error => this.errorMsg = error);
  }

}
