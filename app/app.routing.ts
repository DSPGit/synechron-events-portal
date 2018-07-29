import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

//components
import { SepHomeComponent } from "./home/components/sep-home.component";
import { EmployeesListComponent } from "./employees/components/employees-list.component";
import { EmployeeDetailsComponent } from "./employees/components/employee-details.component";
import { EventsListComponent } from "./events/components/event-list.component";
import { EventDetailsComponent } from "./events/components/event-details.component";
import { JphPostsListComponent } from "./jph/components/jph-posts-list.component";

const appRoutes: Routes = [
    {
        path: "",
        component: SepHomeComponent
    },
    {
        path: "home",
        component: SepHomeComponent
    },
    {
        path: "employees",
        component: EmployeesListComponent
    },
    {
        path: "employees/:id",
        component: EmployeeDetailsComponent
    },
    {
        path: "events",
        component: EventsListComponent
    },
    {
        // as soon as we have a '/:' in url that becomes a param to the URL
        path: "events/:id",
        component: EventDetailsComponent
    },
    {
        path: "jph/posts",
        component: JphPostsListComponent
    }
];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);