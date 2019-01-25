import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-component-parent',
    templateUrl: './parent.component.html'
})

export class Parent4Component implements OnInit {
    message1: string;
    ngOnInit() {}
    constructor() {}
    receiveMessage($event) {
        this.message1 = $event;
    }
}
