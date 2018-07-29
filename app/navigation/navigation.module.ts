import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { SepNavbarComponent } from './components/sep-navbar.component';

@NgModule({
    imports: [CommonModule],
    exports: [SepNavbarComponent],
    declarations: [SepNavbarComponent],
    providers: [],
})
export class NavigationModule { }
