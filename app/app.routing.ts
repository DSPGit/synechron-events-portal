import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

//default router
const defaultRoute: Routes = [
    {
        path: '',
        loadChildren: './home/home.module#HomeModule'
    }
];

//home router
const homeRoute: Routes = [
    {
        path: 'home',
        loadChildren: './home/home.module#HomeModule'
    }
];

//employee router
const empsRoute: Routes = [
    {
        path: 'employees',
        loadChildren: './employees/employees.module#EmployeesModule'
    }
];

//event router
const eventsRoute: Routes = [
    {
        path: 'events',
        loadChildren: './events/events.module#EventsModule'
    }
];

//jph router
const jphRoute: Routes = [
    {
        path: 'jph',
        loadChildren: './jph/jph.module#JphModule'
    }
];

const appRoutes: Routes = [
    ...homeRoute,
    ...empsRoute,
    ...eventsRoute,
    ...jphRoute,
    ...defaultRoute
];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);