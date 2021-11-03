import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
  // preserveWhitespaces: true,
})
export class CounterComponent implements OnInit {

  count = 0;

  constructor() { }

  ngOnInit(): void {
  }

  increment(step = 1) {
    this.count += step;
  }
}
