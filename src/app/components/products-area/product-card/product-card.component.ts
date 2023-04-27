import { Component, Input } from '@angular/core';
import { ProductModel } from 'src/app/models/product.model';
import { AppConfig } from 'src/app/utils/app-config.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent {
  public constructor(private config: AppConfig = new AppConfig()) {}
  public imgUrl = this.config.images;
  @Input()
  public product: ProductModel;
}
