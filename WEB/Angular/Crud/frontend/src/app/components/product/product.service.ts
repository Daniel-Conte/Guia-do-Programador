import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'; // É aquela caixinha que aparece por alguns segundos(geralmente no canto superior direito) para mostrar alguma mensagem (toaster)
import { HttpClient } from '@angular/common/http'
import { Product } from './product.model';
import { EMPTY, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators'

@Injectable({
  providedIn: 'root' // "root" torna disponível para todo o módulo e somente uma instância é usada em todo o módulo (Singleton)
})
export class ProductService {
  private baseUrl = 'http://localhost:3001/products'

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  create(product: Product): Observable<Product> {
    // Esta função irá retornar um Observable do tipo "Product"(o model)
    return this.http.post<Product>(this.baseUrl, product).pipe(catchError(e => this.errorHandler(e)))
      // O método "post" é quem realmente retorna um Observable(é a response), então para vincular o retorno deste Observable à função "create()", é preciso retornar o método "post"
  }

  read(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl).pipe(catchError(e => this.errorHandler(e)))
  }

  readById(id: number): Observable<Product> {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Product>(url).pipe(catchError(e => this.errorHandler(e)))
  }
  
  update(product: Product): Observable<Product> {
    const url = `${this.baseUrl}/${product.id}`
    return this.http.put<Product>(url, product).pipe(catchError(e => this.errorHandler(e)))
  }

  delete(id: number): Observable<Product> {
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<Product>(url).pipe(catchError(e => this.errorHandler(e)))
  }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: isError ? ['msg-error'] : ['msg-success']
        // "panelClass" aplica uma classe CSS
    })
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage('Occoreu um erro!', true)
    return EMPTY
      // "EMPTY" faz parte do "RxJs" e é um Observable vazio
  }
}
