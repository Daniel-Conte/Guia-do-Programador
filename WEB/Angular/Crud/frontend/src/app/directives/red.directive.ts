import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appRed]'
})
export class RedDirective {

  constructor(private el: ElementRef) { // Lembrando que TypeScript é fortemente tipado
    // "ElementRef" Referencia um elemento nativo na DOM
    el.nativeElement.style.color = '#e35e6b'
  }

}
