import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css'],
  // encapsulation: ViewEncapsulation.ShadowDom
})
export class SelectComponent implements OnInit {

  items = ['red', 'green', 'blue'];
  selected = 'green';

  menuOpen = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleMenuOpen() {
    this.menuOpen = !this.menuOpen;
  }

  selectValue(value: string) {
    this.selected = value;
  }

}
