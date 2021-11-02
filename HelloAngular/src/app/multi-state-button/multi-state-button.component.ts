import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-multi-state-button',
  templateUrl: './multi-state-button.component.html',
  styleUrls: ['./multi-state-button.component.css']
})
export class MultiStateButtonComponent implements OnInit {

  items = ['Rouge', 'Vert', 'Bleu'];
  selected = 'Vert';

  constructor() { }

  ngOnInit(): void {
  }

}
