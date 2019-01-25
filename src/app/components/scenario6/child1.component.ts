import { Component, OnInit, Output, EventEmitter } from '@angular/core';
@Component({
    selector: 'app-component-childone',
    templateUrl: './child1.component.html'
})
export class ChildOneComponent implements OnInit {
    @Output() messageEvent = new EventEmitter();
    message;
    ngOnInit() {}
    constructor() {}
    getMessage(message: string) {
        this.message = message;
    }
    sendMessage() {
        this.messageEvent.emit(this.message);
    }
}
