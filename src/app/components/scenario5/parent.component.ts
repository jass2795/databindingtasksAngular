import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-component-parent1',
    templateUrl: './parent.component.html'
})

export class Parent5Component implements OnInit {
    message1 = '';
    // @Output() messageEvent = new EventEmitter();
    ngOnInit() {}
    constructor() {}
    receiveMessage($event) {
        this.message1 = $event;
    }
}
