import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {

  @Input() appHighlight!: string;
  @Input() appHighlightTimeout!: number;

  constructor(private el: ElementRef) {
   // if (el.nativeElement instanceof HTMLHeadingElement) {

  //  }
 }
  ngOnInit(): void {
    this.el.nativeElement.style.backgroundColor = this.appHighlight || 'yellow'; // si this.appHighlight équivaut à false ('', false, 0, undefined, null...), prend la 2e partie

    if (this.appHighlightTimeout) {
      setTimeout(() => {
        this.el.nativeElement.style.backgroundColor = null;
      }, this.appHighlightTimeout);
    }
  }


}
