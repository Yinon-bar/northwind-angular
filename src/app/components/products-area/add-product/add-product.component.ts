import { Component } from '@angular/core';
import { ProductModel } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/products.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent {
  public product = new ProductModel();
  public constructor(private productService: ProductService) {}

  public async send() {
    try {
      const newProduct = this.productService.addOneProduct(this.product);
      console.log(this.product);
      return;
    } catch (error: any) {
      console.log(error.message);
    }
  }
}
