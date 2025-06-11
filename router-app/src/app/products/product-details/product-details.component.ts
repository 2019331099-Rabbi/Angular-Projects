import { Component } from '@angular/core';
import { ProductsService } from '../products.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  standalone: false,
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
  constructor(private store: ProductsService, private router: ActivatedRoute) {}
  product: any;

  ngOnInit() {
    const id = Number(this.router.snapshot.paramMap.get('id'));
    this.store.getProductByID(id).subscribe(product => {
      this.product = product;
    });
  }
}
