import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private products = [
    { id: 1, name: 'Product 1', price: 100, description: 'This is the first product.' },
    { id: 2, name: 'Product 2', price: 200, description: 'This is the second product.' },
    { id: 3, name: 'Product 3', price: 300, description: 'This is the third product.' }
  ];


  constructor() { }

  getAllProducts() {
    return of(this.products);
  }

  getProductByID(id: number) {
    const product = this.products.find(p => p.id === id);
    return of(product ? product : null);
  }
}
