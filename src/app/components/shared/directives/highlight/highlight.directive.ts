import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(
    element: ElementRef
  ) {
    //tomamos el elemento nativo y se modifica su comportamiento en el dom
    element.nativeElement.style.backgroundColor="yellow";
   }

}
