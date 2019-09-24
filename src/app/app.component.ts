import { Component } from '@angular/core';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private emp:EmployeeService)
  {

  }
  
  title = 'my-emp';
  emp_id
  emp_name
  emp_dept
  myempl={id:1,name:'',dept:''}
  addemp()
  {
    this.myempl.id=this.emp_id
    this.myempl.name=this.emp_name
    this.myempl.dept=this.emp_dept

    this.emp.setemployee(this.myempl)
  }
}
