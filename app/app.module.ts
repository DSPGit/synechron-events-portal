import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

//modules 
import { EmployeesModule } from "./employees/employees.module";
import { EventsModule } from "./events/events.module";
import { JphModule } from "./jph/jph.module";

//components
import { AppComponent } from "./app.component";

//services

@NgModule({
    imports: [
        BrowserModule,
        EmployeesModule,
        EventsModule,
        JphModule
    ],
    exports: [],
    //components, pipes and directives declarations go here
    declarations: [
        AppComponent
    ],
    //services go in providers
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {

}