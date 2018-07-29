import { Component, OnInit, Inject } from '@angular/core';

import { Employee } from "../models/employee";
import { SepEmployee } from "../models/sep-employee";
import { SepEmployeesService } from "../services/sep-employees.service";


@Component({
    selector: 'employees-list',
    templateUrl: '../views/employees-list.component.html'
})

export class EmployeesListComponent implements OnInit {
    constructor(@Inject(SepEmployeesService) private _employeesService: SepEmployeesService) { }

    ngOnInit(): void {
        this._employeesService.getAllEmployees().subscribe(
            (data) => this.employees = data,
            (err) => console.error(err),
            () => console.log("Employee service complete!")
        )
    }
    title: string = "Synechron Employees List!";
    subTitle: string = "Core Development Team!";
    selectedEmployee: Employee;

    onEmployeeSelection(emp: Employee): void {
        this.selectedEmployee = emp;
    }

    employees: SepEmployee[] = []

}