import { NgModule } from '@angular/core';
//Components
import { SepHomeComponent } from './components/sep-home.component';

//Routers
import { homeRouting } from './home.routing';

@NgModule({
    imports: [homeRouting],
    exports: [SepHomeComponent],
    declarations: [SepHomeComponent],
    providers: [],
})
export class HomeModule { }
