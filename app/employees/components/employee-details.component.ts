import { Component, Input, Inject, OnInit } from '@angular/core';

//services
import { SepEmployeesService } from "../services/sep-employees.service";
import { ActivatedRoute } from '@angular/router';
//models
import { Employee } from "../models/employee";
import { SepEmployee } from '../models/sep-employee';

@Component({
    selector: 'employee-details',
    templateUrl: '../views/employee-details.component.html'
})

export class EmployeeDetailsComponent implements OnInit {

    employeeId: number;
    employee: SepEmployee;
    title: string = "Details of Employee - ";

    constructor(
        @Inject(SepEmployeesService) private _employeesService: SepEmployeesService,
        @Inject(ActivatedRoute) private _route: ActivatedRoute
    ) { }

    ngOnInit(): void {
        this._route.params.subscribe((params) => this.employeeId = params["id"])
        this._employeesService.getSingleEmployee(this.employeeId).subscribe(
            (data) => this.employee = data,
            (err) => console.error(err),
            () => console.log("Fetch one employee service complete!!")
        )
        console.log(this.employee);
    }
}