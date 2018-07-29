import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '../../node_modules/@angular/router';

//components
import { EventsListComponent } from './components/event-list.component';
import { EventDetailsComponent } from './components/event-details.component';

//pipes
import { FirstLetterCapitalPipe } from './pipes/first-letter-capital.pipes';
import { FilterByPipe } from './pipes/filter-by.pipe';

//services
import { SepEventsService } from './services/sep-events.service';

//Routers
import { eventsRouting } from './events.routing';

@NgModule({

    imports: [
        CommonModule,
        FormsModule,
        HttpClientModule,
        RouterModule,
        eventsRouting],
    exports: [EventsListComponent],
    declarations: [
        EventsListComponent,
        EventDetailsComponent,
        FirstLetterCapitalPipe,
        FilterByPipe
    ],
    providers: [SepEventsService],
})

export class EventsModule { }
