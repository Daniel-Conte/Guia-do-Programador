import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './views/home/home.component'
import { ProductCrudComponent } from './views/product-crud/product-crud.component'

const routes: Routes = [{ /* Configura os paths para acessar os componentes e quais componentes serão carregados */
  path: "", // Define o path que será mostrado na url e que deverá ser acessado pelo "routerLink". "" significa que é a raiz
  component: HomeComponent // Define qual componente será carregado ao selecionar o path
}, {
  path: 'products', // Não coloque "/" na frente do nome, ela é colocada automaticamente na url
  component: ProductCrudComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
