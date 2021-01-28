import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'; // É aquela caixinha que aparece por alguns segundos(geralmente no canto superior direito) para mostrar alguma mensagem (toaster)

@Injectable({
  providedIn: 'root' // "root" torna disponível para todo o módulo e somente uma instância é usada em todo o módulo (Singleton)
})
export class ProductService {

  constructor(private snackBar: MatSnackBar) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top'
    })
  }
}
