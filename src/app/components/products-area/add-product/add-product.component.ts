import { Component, ElementRef, ViewChild } from '@angular/core';
import { ProductModel } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/products.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent {
  public product = new ProductModel();
  @ViewChild('productImage')
  public productImage: ElementRef<HTMLInputElement>;
  public constructor(private productService: ProductService) {}

  public async send() {
    try {
      this.product.image = this.productImage.nativeElement.files[0];
      const newProduct = await this.productService.addOneProduct(this.product);
      console.log(this.product);
      alert('Product ' + newProduct.id + ' Was Added Successfuly');
      return;
    } catch (error: any) {
      console.log(error.message);
    }
  }
}
