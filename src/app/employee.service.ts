import { Injectable } from '@angular/core';
// HttpClient being imported
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IEmployee } from './employee';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

// injectable decorator tells angular that the given class is a service and some component are dependent upon it
// it also tells angular that this service itself have injected dependencies
// it required when u are injecting a service into another service
// if u remove injectable decorator then this class will be a plain text class i.e. not related to angular anymore
@Injectable()
export class EmployeeService {

  // variable storing the path of the json file
  // employee.json contains the employee data
  private url = '/assets/data/employees.json';

  // to use http client services we declare it as a dependency in the constructor inside the required service class
  // here http is our local variable i.e. being used to refer to an instance of HttpClient
  constructor(private http: HttpClient) { }


  // object provider funtion defined
  getEmployees(): Observable<IEmployee> {
    // fetching data using HTTP
    // get() method takes a url as an argument
    // here we are giving path to a json file storing employee's data
    // but in real world we will give an actual url to make a call to the server
    // following statement will give emloyee data(observable) in return which we will access through subscribing to it in required component
    // observable data is cast into the format of IEmployee by using an object of IEmployee
    return this.http.get<IEmployee[]>(this.url)
                    .catch(this.errorHandler);
                    // catch will catch the error if it occurs and errorHandler which is going to handle the error
  }
  // this method will be called when an error occurs
  // in argument, error is a variable storing an instance of HttpErrorResponse
  // errorHandler method throws out an error message so that any component that has subscribed to the observable can
  // make use of the message and display it on the view
  errorHandler(error: HttpErrorResponse) {
    // to throw some error message
    // error.message will give the error name after identifying
    // but in case if there is no error in our application we will assume it is a server error
    return Observable.throw(error.message || 'Server Error');
  }

}
