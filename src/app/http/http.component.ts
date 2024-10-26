import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { product } from '../product';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {
  products: product[] = []

  product: product = new product(1, '', '', 0, 0)

  constructor(private service: DataService) { }

  ngOnInit(): void {
    // this.addProduct()
    this.updateProduct()
    this.fetchAllProducts()
    this.deleteProduct()
  }

  fetchAllProducts(): void {
    this.service.fetchAllProducts().subscribe((data) => {
      this.products = data
    })
  }

  addProduct(): void {
    this.service.addProduct(new product(104, 'Laptop', 'Lenovo', 50, 50000)).subscribe((data) => {
      this.product = data
    })
  }

  deleteProduct(): void {
    this.service.deleteProduct(104).subscribe((data) => {
      this.product = data
    })
  }

  updateProduct(): void {
    this.service.updateProduct(new product(104, 'Hypefsfrware', 'Dell', 50, 70000)).subscribe((data) => {
      this.product = data
    })
  }
}