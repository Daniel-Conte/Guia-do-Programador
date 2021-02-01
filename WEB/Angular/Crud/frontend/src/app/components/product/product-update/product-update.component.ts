import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {
  product: Product

  constructor(private router: Router,
    private productService: ProductService,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    const id = + this.route.snapshot.paramMap.get('id') // Pega o valor do parâmetro na url
      // "+" convertendo pra Number
    this.productService.readById(id).subscribe(product => {
      this.product = product
    })
  }

  updateProduct() {
    this.productService.update(this.product).subscribe(() => {
      this.productService.showMessage('Produto Atualizado com Sucesso!')
      this.router.navigate(['/products'])
    })
  }

  cancel() {
    this.router.navigate(['/products'])
  }
}
