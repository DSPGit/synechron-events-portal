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
//pipes
import { FilterByPipe } from "./pipes/filter-by.pipe";
import { FormsModule } from "@angular/forms";

@NgModule({
    imports: [CommonModule, employeesRoutes, HttpClientModule, FormsModule],
    exports: [EmployeesListComponent],
    declarations: [
        EmployeesListComponent,
        EmployeeDetailsComponent,
        FilterByPipe],
    providers: [SepEmployeesService]
})
export class EmployeesModule {

}