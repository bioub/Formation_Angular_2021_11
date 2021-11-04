import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'my-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css'],
  // encapsulation: ViewEncapsulation.ShadowDom
})
export class SelectComponent implements OnInit {

  @Input() items = ['red', 'green', 'blue'];
  @Input() selected = '';

  @Output() selectedChange = new EventEmitter<string>();

  menuOpen = false;

  constructor() {
    console.log('constructor', this.selected); // ''
  }

  ngOnInit(): void {
    console.log('ngOnInit', this.selected); // 'Eric'
    if (!this.selected && this.items.length) {
      this.selected = this.items[0];
    }
  }

  toggleMenuOpen() {
    this.menuOpen = !this.menuOpen;
  }

  selectValue(value: string) {
    this.selected = value; // modifie la valeur interne
    this.selectedChange.emit(value); // notifie le parent de mettre à jour sa valeur
  }

}
