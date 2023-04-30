import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConfig } from '../utils/app-config.service';
import { firstValueFrom } from 'rxjs';
import { ProductModel } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  public constructor(private http: HttpClient, private config: AppConfig) {}
  public async getAllProducts(): Promise<ProductModel[]> {
    const observable = this.http.get<ProductModel[]>(this.config.products);
    const products = await firstValueFrom(observable);
    return products;
  }
  public async addOneProduct(product: ProductModel): Promise<ProductModel> {
    const formData = new FormData();
    formData.append('name', product.name);
    formData.append('price', product.price.toString());
    formData.append('stock', product.stock.toString());
    formData.append('image', product.image);
    const observable = this.http.post<ProductModel>(
      this.config.products,
      formData
    );
    const newProduct = await firstValueFrom(observable);
    return newProduct;
  }
  public async deleteOneProduct(id: number): Promise<void> {
    const observable = this.http.delete(this.config.products + id);
    await firstValueFrom(observable);
  }
}
