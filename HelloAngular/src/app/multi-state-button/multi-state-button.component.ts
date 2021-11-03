import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-multi-state-button',
  templateUrl: './multi-state-button.component.html',
  styleUrls: ['./multi-state-button.component.css']
})
export class MultiStateButtonComponent implements OnInit {

  items = ['red', 'green', 'blue'];
  selected = 'green';

  constructor() { }

  ngOnInit(): void {
  }

  selectNext() {
    const indexSelected = this.items.indexOf(this.selected);
    const indexNext = (indexSelected + 1) % this.items.length;

    // let indexNext = 0;

    // if (indexSelected < this.items.length - 1) {
    //   indexNext = indexSelected + 1;
    // }

    this.selected = this.items[indexNext];
  }

}
