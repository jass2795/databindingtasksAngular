import { Component, OnInit, Output, EventEmitter } from '@angular/core';
@Component({
    selector: 'app-component-grandchild',
    templateUrl: './child.component.html'
})
export class Child5Component implements OnInit {
    // tslint:disable-next-line:quotemark
  @Output() messageEvent = new EventEmitter();
    message;
    ngOnInit() {}
    constructor() {}
    getMessage(message: string) {
        this.message = message;
    }
    sendmessage() {
        this.messageEvent.emit(this.message);
    }
}
