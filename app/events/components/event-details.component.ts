//output: child to parent relation
//input: parent to child relation
//eventEmitter: to be used in case of output
import { Component, Input, Output, EventEmitter, Inject, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { SepEventsService } from '../services/sep-events.service';
import { SepEvent } from '../models/sep-event';

@Component({
    selector: 'event-details',
    templateUrl: '../views/event-details.component.html'
})

export class EventDetailsComponent implements OnInit {
    eventId: number;
    event: SepEvent;
    title: string = "Details of the event - "

    constructor(
        @Inject(SepEventsService) private _eventsService: SepEventsService,
        @Inject(ActivatedRoute) private _route: ActivatedRoute
    ) { }

    //this is to use the selected id on "show details" in events list page and assign it to local var.
    ngOnInit(): void {
        this._route.params.subscribe((params) => this.eventId = params["id"]);
        this._eventsService.getSingleEvent(this.eventId).subscribe(
            data => this.event = data,
            err => console.error(err),
            () => console.log("Service call complete!")
        );
    }

    // @Input("receivedEventId") eventId: number;
    // @Output("onConfirmation") sendConfirmation: EventEmitter<string> = new EventEmitter<string>();

    // onSendConfirmation(): void {
    //     this.sendConfirmation.emit("Received Event Successfully!");
    // }

    // ngOnChanges(): void {
    //     this.event = this._eventsService.getSingleEvent(this.eventId);
    // }

}