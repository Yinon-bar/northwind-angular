import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppConfig {
  private url = 'http://localhost:3030/api/';
  public products = this.url + 'products/';
  public images = this.url + 'products/images/';
}
