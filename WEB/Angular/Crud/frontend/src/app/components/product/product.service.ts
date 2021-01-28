import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'; // É aquela caixinha que aparece por alguns segundos(geralmente no canto superior direito) para mostrar alguma mensagem (toaster)
import { HttpClient } from '@angular/common/http'
import { Product } from './product.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root' // "root" torna disponível para todo o módulo e somente uma instância é usada em todo o módulo (Singleton)
})
export class ProductService {
  private baseUrl = 'http://localhost:3001/products'

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  create(product: Product): Observable<Product> {
    // Esta função irá retornar um Observable do tipo "Product"(o model)
    return this.http.post<Product>(this.baseUrl, product)
      // O método "post" é quem realmente retorna um Observable(é a response), então para vincular o retorno deste Observable à função "create()", é preciso retornar o método "post"
  }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top'
    })
  }
}
