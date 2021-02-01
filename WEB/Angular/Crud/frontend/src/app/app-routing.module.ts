import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './views/home/home.component'
import { ProductCrudComponent } from './views/product-crud/product-crud.component'
import { ProductCreateComponent } from './components/product/product-create/product-create.component';
import { ProductUpdateComponent } from './components/product/product-update/product-update.component';
import { ProductDeleteComponent } from './components/product/product-delete/product-delete.component';

const routes: Routes = [ /* Configura os paths para acessar os componentes e quais componentes serão carregados */
{
  path: "", // Define o path que será mostrado na url e que deverá ser acessado pelo "routerLink". "" significa que é a raiz
  component: HomeComponent // Define qual componente será carregado ao selecionar o path
},
{
  path: 'products', // Não coloque "/" na frente do nome, ela é colocada automaticamente na url
  component: ProductCrudComponent
},
{
  path: 'products/create',
  component: ProductCreateComponent
},
{
  path: 'products/update/:id', // ":" significa que é um parâmetro
  component: ProductUpdateComponent
},
{
  path: 'products/delete/:id',
  component: ProductDeleteComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
