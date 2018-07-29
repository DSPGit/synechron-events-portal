import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { EventsListComponent } from "./components/event-list.component";
import { EventDetailsComponent } from "./components/event-details.component";

const eventRoutes: Routes = [
    {
        path: "",
        component: EventsListComponent
    },
    {
        path: ":id",
        component: EventDetailsComponent
    }
];

export const eventsRouting: ModuleWithProviders = RouterModule.forChild(eventRoutes);