import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

//module with providers
import { appRouting } from "./app.routing";

//modules 
import { NavigationModule } from "./navigation/navigation.module";

//components
import { AppComponent } from "./app.component";

//services

@NgModule({
    imports: [
        BrowserModule,
        NavigationModule,
        appRouting
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