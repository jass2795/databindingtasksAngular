import { Component, OnInit } from '@angular/core';
import { DataService } from '/home/user/Documents/dataBindingTask1/src/app/service/scenario6/user.service';

@Component({
  selector: 'app-sibling',
  templateUrl: './child1.component.html'
})
export class SiblingOneComponent implements OnInit {

  message: string;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.message = message);
  }
  getMessage(message) {
      this.message = message;
  }
  newMessage() {
    this.data.changeMessage(this.message);
  }

}
