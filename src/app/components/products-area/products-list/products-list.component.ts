import { Component, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css'],
})
export class ProductsListComponent implements OnInit {
  public products: ProductModel[];
  public constructor(private productService: ProductService) {}

  public async ngOnInit(): Promise<void> {
    try {
      this.products = await this.productService.getAllProducts();
      console.log(this.products);
    } catch (error: any) {
      console.log(error.message);
    }
  }
}
