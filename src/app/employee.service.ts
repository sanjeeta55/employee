import { Injectable } from '@angular/core';

@Injectable()


export class EmployeeService
{
    employee =[
        {id:1,name:'ABC',dept:'CSE'},
        {id:2,name:'XYZ',dept:'ECE'},
        {id:3,name:'FFF',dept:'CIVIL'}
    ]

    getemployee()
    {
        return this.employee
    }

    setemployee(emp)
    {
        this.employee.push(emp)
    }
}