import { Component } from '@angular/core';
import { product } from '../product';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  product: product = new product(0, '', '', 0, 0)
  products: product [] = []

  onSubmit() {
    // Push a copy of the product into the products array
    this.products.push({ ...this.product });

    // Clear the form by resetting the product object
    this.product = new product(0, '', '', 0, 0);
  }

  clearProducts() {
    this.products = [];
  }
}