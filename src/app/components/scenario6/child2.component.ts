import { Component, OnInit, Input } from '@angular/core';
@Component({
    selector: 'app-component-childtwo',
    templateUrl: './child2.component.html'
})

export class ChildTwoComponent implements OnInit {
    @Input() getmessage: string;
    ngOnInit() {}
    constructor() {}
}
