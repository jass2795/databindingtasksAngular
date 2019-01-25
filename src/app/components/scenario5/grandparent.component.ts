import { Component, OnInit, Input } from '@angular/core';
@Component({
    selector: 'app-component-grandparent',
    templateUrl: './grandparent.component.html'
})

export class GrandparentComponent implements OnInit {
    @Input() getmessage: string;
    ngOnInit() {}
    constructor() {}
}
