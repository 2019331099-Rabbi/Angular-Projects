import { Component } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-products-list',
  standalone: false,
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css'
})
export class ProductsListComponent {
  products: any[] = [];
  constructor(private store: ProductsService) { }

  ngOnInit() {
    this.store.getAllProducts().subscribe(products => {
      this.products = products;
    });
  }
}
