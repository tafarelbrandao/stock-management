import { Component } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {  
  constructor(private productService: ProductService) {}
  displayedColumns: string[] = ['options','code', 'name'];
  products: Product[] = [];

  getProducts(): void {
    
    this.productService.getProducts().subscribe(res => {
      this.products = res;
    });;
  }

  editProduct(product : Product) {
    console.log('editando');
    console.log(product);
  }

  ngOnInit(): void {
    this.getProducts();
  }

}
