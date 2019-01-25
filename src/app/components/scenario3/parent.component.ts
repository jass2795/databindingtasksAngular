import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-component-one',
    templateUrl: './parent.component.html'
})

export class ParentComponent implements OnInit {
    // tslint:disable-next-line:quotemark
    parent = '';
    ngOnInit() {}
    constructor() {}
    //    Getting value from child
  childToParent(name: string) {
      console.log(name);
        this.parent = name;
  }
}
