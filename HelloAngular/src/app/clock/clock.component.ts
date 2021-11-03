import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit, OnDestroy {

  now = new Date();

  private interval!: any;

  constructor() { }

  ngOnInit(): void {
    this.interval = setInterval(() => {
      this.now = new Date();
    }, 1000);
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }

  // essentiel pour :
  // setInterval / clearInterval
  // addEventListener / removeEventListener
  // new WebSocket / close
  // new Worker / destroy
  // ...

  // bonne pratique pour (le callback n'est appelée qu'une fois):
  // setTimeout / clearTimeout
  // ajax

}
