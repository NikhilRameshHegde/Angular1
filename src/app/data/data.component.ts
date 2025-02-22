import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { product } from '../product';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit{
  productId: number = 1456
  description: string = "Amaterasu"
  brand: string = "Sony"
  price: number = 10000
  isAvailable: boolean = true

  orderedQty: number = -1
  availableQty: number = 100

  isMember: boolean = true
  freeShipping: string = this.price <= 10000 ? 'green' : 'red'

  products: any[] = [
    { "productId": 101, "description": "Foldable Phone", "brand": "Galaxy Void", "availableQty": 200, "price": 60000, "freeShipping": "green" },
    { "productId": 102, "description": "Foldable Phone", "brand": "Galaxy Void", "availableQty": 200, "price": 60000, "freeShipping": "red" },
    { "productId": 103, "description": "Foldable Phone", "brand": "Galaxy Void", "availableQty": 200, "price": 60000, "freeShipping": "purple" },
    { "productId": 104, "description": "Foldable Phone", "brand": "Galaxy Void", "availableQty": 200, "price": 60000, "freeShipping": "violet" },
    { "productId": 105, "description": "Foldable Phone", "brand": "Galaxy Void", "availableQty": 200, "price": 60000, "freeShipping": "blue" },
    { "productId": 106, "description": "Foldable Phone", "brand": "Galaxy Void", "availableQty": 200, "price": 60000, "freeShipping": "cyan" }
  ]

  products2: product[] = []
  constructor(private service: DataService) {

  }

  ngOnInit(): void {
    this.getProducts()
  }

  public getProducts(): void {
    this.products2 = this.service.getProducts()
  }

  public placeOrder(): void {
    if (this.orderedQty < this.availableQty) {
      this.isAvailable = true
    }
    else {
      this.isAvailable = false
    }
    console.log("Order received", this.orderedQty)
  }
}