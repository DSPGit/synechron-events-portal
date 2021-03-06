import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { SepHomeComponent } from "./components/sep-home.component";

const homeRoutes: Routes = [
    {
        path: "",
        component: SepHomeComponent
    },
];

export const homeRouting: ModuleWithProviders = RouterModule.forChild(homeRoutes);