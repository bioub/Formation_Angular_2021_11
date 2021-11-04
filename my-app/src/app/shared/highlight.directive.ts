import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[myHighlight]'
})
export class HighlightDirective implements OnInit {

  @Input() myHighlight!: string;
  @Input() myHighlightTimeout!: number;

  constructor(private el: ElementRef) {
   // if (el.nativeElement instanceof HTMLHeadingElement) {

  //  }
 }
  ngOnInit(): void {
    this.el.nativeElement.style.backgroundColor = this.myHighlight || 'yellow'; // si this.myHighlight équivaut à false ('', false, 0, undefined, null...), prend la 2e partie

    if (this.myHighlightTimeout) {
      setTimeout(() => {
        this.el.nativeElement.style.backgroundColor = null;
      }, this.myHighlightTimeout);
    }
  }


}
