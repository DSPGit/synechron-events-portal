//output: child to parent relation
//input: parent to child relation
//eventEmitter: to be used in case of output
import { Component, Input, Output, EventEmitter } from '@angular/core';

import { SepEvent } from "../models/sep-event";

@Component({
    selector: 'event-details',
    templateUrl: '../views/event-details.component.html'
})

export class EventDetailsComponent {
    constructor() { }
    title: string = "Details of the event - "

    @Input("receivedEvent") event: SepEvent;
    @Output("onConfirmation") sendConfirmation: EventEmitter<string> = new EventEmitter<string>();

    onSendConfirmation(): void {
        this.sendConfirmation.emit("Received Event Successfully!");
    }
}