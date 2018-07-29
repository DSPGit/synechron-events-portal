import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { HttpClientModule } from '@angular/common/http';

//components
import { JphPostsListComponent } from './components/jph-posts-list.component';

//services
import { JphService } from './services/jph.service';

//Routers
import { jphRouting } from './jph.routing';

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
        jphRouting
    ],
    exports: [JphPostsListComponent],
    //components, pipes and directives declarations go here
    declarations: [JphPostsListComponent],
    //service go in providers
    providers: [JphService],
})
export class JphModule { }
