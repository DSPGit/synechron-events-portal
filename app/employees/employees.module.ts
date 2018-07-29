import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from '@angular/common/http';

//components
import { EmployeesListComponent } from "./components/employees-list.component";
import { EmployeeDetailsComponent } from "./components/employee-details.component";

//Routes
import { employeesRoutes } from "./employees.routing";

//service
import { SepEmployeesService } from "./services/sep-employees.service";

@NgModule({
    imports: [CommonModule, employeesRoutes, HttpClientModule],
    exports: [EmployeesListComponent],
    declarations: [
        EmployeesListComponent,
        EmployeeDetailsComponent],
    providers: [SepEmployeesService]
})
export class EmployeesModule {

}