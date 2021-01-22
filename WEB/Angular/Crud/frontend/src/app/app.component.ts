import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // Define o nome da tag do componente para ser chamada no HTML
  templateUrl: 'app.component.html' // Localiza onde está o HTML deste componente
  //template: ` ... `, Usado para escrever o HTML inline
})
export class AppComponent {
  title = 'frontend';
}
