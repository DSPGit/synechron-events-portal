import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

//components
import { EmployeesListComponent } from "./components/employees-list.component";
import { EmployeeDetailsComponent } from "./components/employee-details.component";

//Routes
import { employeesRoutes } from "./employees.routing";

@NgModule({
    imports: [CommonModule, employeesRoutes],
    exports: [EmployeesListComponent],
    declarations: [
        EmployeesListComponent,
        EmployeeDetailsComponent],
    providers: []
})
export class EmployeesModule {

}