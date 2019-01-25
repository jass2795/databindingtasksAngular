import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
    selector: 'app-component-child',
    templateUrl: './child.component.html'
})
export class Child4Component implements OnInit {
    // tslint:disable-next-line:quotemark
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
