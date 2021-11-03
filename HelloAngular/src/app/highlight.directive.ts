import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(el: ElementRef) {
   // if (el.nativeElement instanceof HTMLHeadingElement) {
      el.nativeElement.style.backgroundColor = 'yellow';
  //  }
 }

}
