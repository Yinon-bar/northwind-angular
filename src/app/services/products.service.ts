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
  public addOneProduct() {}
  public deleteOneProduct() {}
}