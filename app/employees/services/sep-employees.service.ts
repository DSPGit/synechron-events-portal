import { Injectable, Inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { Employee } from "../models/employee";


@Injectable()
export class SepEmployeesService {

    constructor(@Inject(HttpClient) private _http: HttpClient) { }

    getAllEmployees(): Observable<Employee[]> {
        return this._http.get<Employee[]>("http://localhost:9090/api/employees/");
    }

    getSingleEmployee(id: number): Observable<Employee> {
        return this._http.get<Employee>("http://localhost:9090/api/employees/" + id);
    }

    registerNewEmployee(employee: Employee): Observable<string> {
        return this._http.post<string>("http://localhost:9090/api/employees", employee);
    }
}