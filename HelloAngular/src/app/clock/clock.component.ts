import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit, OnDestroy, OnChanges {

  now = new Date();

  @Input() delay = 1000;

  private interval!: any;

  constructor() { }

  ngOnInit(): void {
    this.interval = setInterval(() => {
      this.now = new Date();
    }, this.delay);
    console.log('ngOnInit', this.delay);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!changes.delay.firstChange && changes.delay.currentValue !== changes.delay.previousValue) {
      clearInterval(this.interval);
      this.interval = setInterval(() => {
        this.now = new Date();
      }, this.delay);
    }
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
