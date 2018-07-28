import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

//components
import { AppComponent } from "./app.component";
import { EmployeesListComponent } from "./employees/components/employees-list.component";
import { EmployeeDetailsComponent } from "./employees/components/employee-details.component";
import { EventsListComponent } from "./events/components/event-list.component"
import { EventDetailsComponent } from "./events/components/event-details.component";

//pipes
import { FirstLetterCapitalPipe } from "./events/pipes/first-letter-capital.pipes";
import { FilterByPipe } from "./events/pipes/filter-by.pipe";

@NgModule({
    imports: [BrowserModule, FormsModule],
    exports: [],
    //components, pipes and directives declarations go here
    declarations: [
        AppComponent,
        EmployeesListComponent,
        EmployeeDetailsComponent,
        EventsListComponent,
        EventDetailsComponent,
        FirstLetterCapitalPipe,
        FilterByPipe
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {

}