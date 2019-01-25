import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-component-two',
    templateUrl: './child.component.html'
})

export class ChildComponent implements OnInit {
    @Input() parenttochild: string;
    ngOnInit() {}
    constructor() {}
}
