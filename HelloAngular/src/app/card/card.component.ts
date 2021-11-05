import { AfterContentInit, AfterViewInit, Component, ContentChild, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements AfterContentInit, AfterViewInit {

  @ContentChild('h2Var') h2El!: ElementRef<HTMLHeadingElement>;
  @ViewChild('bodyVar') divEl!: ElementRef<HTMLDivElement>;

  ngAfterContentInit(): void {
    console.log(this.h2El);
  }

  ngAfterViewInit(): void {
    console.log(this.divEl);
  }

}
