import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

//components
import { AppComponent } from "./app.component";
import { EmployeesListComponent } from "./employees/components/employees-list.component";
import { EmployeeDetailsComponent } from "./employees/components/employee-details.component";
import { EventsListComponent } from "./events/components/event-list.component"
import { EventDetailsComponent } from "./events/components/event-details.component";

//pipes
import { FirstLetterCapitalPipe } from "./events/pipes/first-letter-capital.pipes";

@NgModule({
    imports: [BrowserModule],
    exports: [],
    //components and pipes declarations go here
    declarations: [
        AppComponent,
        EmployeesListComponent,
        EmployeeDetailsComponent,
        EventsListComponent,
        EventDetailsComponent,
        FirstLetterCapitalPipe
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {

}