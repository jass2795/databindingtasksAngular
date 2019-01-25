import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-component-parenttwo',
    templateUrl: './parent.component.html'
})

export class Parent6Component implements OnInit {
    message1 = '';
    // @Output() messageEvent = new EventEmitter();
    ngOnInit() {}
    constructor() {}
    receiveMessage($event) {
        this.message1 = $event;
    }
    getmessage() {
        return this.message1;
    }
}
