import { Component } from '@angular/core';

@Component({
    selector: 'sep-home',
    templateUrl: '../views/sep-home.component.html'
})

export class SepHomeComponent {
    constructor() { }
    pageTitle: string = "Welcome to Synechron Events!";
}