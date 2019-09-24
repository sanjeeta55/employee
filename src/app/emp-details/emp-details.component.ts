import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-emp-details',
  templateUrl: './emp-details.component.html',
  styleUrls: ['./emp-details.component.css']
})
export class EmpDetailsComponent implements OnInit {

  constructor(private employee:EmployeeService) { }

  ngOnInit() {
    this.empldetails=this.employee.getemployee()
  }

  empldetails=[]

}
