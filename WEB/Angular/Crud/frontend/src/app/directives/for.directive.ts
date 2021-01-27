import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[myFor]'
})
export class MyForDirective implements OnInit {
@Input("myForEm") numbers: number[]
  // "@Input(<Diretiva><Texto>)" é usado para interpretar valores na diretiva
  // "Texto" pode ser qualquer um
  // Irá procurar o valor especificado("number[]") que se encontra após o "Texto" que está na diretiva especificada
    // O resultado é colocado na variável passada(numbers)

  constructor(
    private container: ViewContainerRef,
    private template: TemplateRef<any>
  ) {}

  ngOnInit(): void { // Executa ao iniciar    
    for(let number of this.numbers) {
      this.container.createEmbeddedView( // Cria um container para cada template
        this.template, { $implicit : number } // "$implicit" é valor implícito que será passado para o template
      )
    }
  }
}
