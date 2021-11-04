import { AfterContentInit, Component, ContentChild, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'my-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements AfterContentInit {

  @ContentChild('h2') h2El!: ElementRef<HTMLHeadingElement>;

  ngAfterContentInit(): void {
    console.log(this.h2El);
  }

}
