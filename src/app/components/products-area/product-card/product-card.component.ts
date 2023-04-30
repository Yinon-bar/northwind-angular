import { Component, Input } from '@angular/core';
import { ProductModel } from 'src/app/models/product.model';
import { AppConfig } from 'src/app/utils/app-config.service';
import { ProductService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent {
  public constructor(
    private productService: ProductService,
    private config: AppConfig = new AppConfig()
  ) {}
  public imgUrl = this.config.images;
  @Input()
  public product: ProductModel;

  public async deleteProduct() {
    try {
      if (!window.confirm('Are you sure?')) return;
      await this.productService.deleteOneProduct(this.product.id);
      alert('Product Deleted');
    } catch (error: any) {
      alert(error.message);
    }
  }
}
