import { Component, OnInit } from '@angular/core';
import { DataService } from '/home/user/Documents/dataBindingTask1/src/app/service/scenario6/user.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html'
})
export class ParentSiblingComponent implements OnInit {

  message: string;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.message = message);
  }
}
