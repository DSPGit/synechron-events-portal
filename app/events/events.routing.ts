import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { EventsListComponent } from "./components/event-list.component";
import { EventDetailsComponent } from "./components/event-details.component";
import { NewEventComponent } from "./components/new-event.component";

const eventRoutes: Routes = [
    {
        path: "",
        component: EventsListComponent
    },
    {
        path: "new",
        component: NewEventComponent
    },
    {
        path: ":id",
        component: EventDetailsComponent
    }
];

export const eventsRouting: ModuleWithProviders = RouterModule.forChild(eventRoutes);