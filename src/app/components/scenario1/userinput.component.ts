import { Component, OnInit } from '@angular/core';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'input-user',
    templateUrl: './userinput.component.html'
})
export class UserInputComponent {
    show(val: HTMLInputElement) {
        console.log(val);
    }
}
