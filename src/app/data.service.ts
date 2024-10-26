import { Injectable } from '@angular/core';
import { product } from '../app/product';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  getProducts(): product[] {
    return this.products
  }
  private products: product[] = []
  // private product: product = new product(5, 'Washing Bucket', 'Tata', 20, 50)
  constructor(private http:HttpClient) {
    this.products[0] = new product(1021, 'Tata', 'Dish TV', 10, 2500);
    this.products[1] = new product(3023, 'Wipro', 'Blubs', 210, 300);
    this.products[2] = new product(3421, 'TVS', 'Belts', 210, 5500);
    this.products[3] = new product(21, 'Reliance', 'Dish TV', 50, 4500);
    this.products[4] = new product(432, 'ActFiber', 'Router', 60, 1400);
    this.products[5] = new product(909, 'Samsung', 'Smart TV', 50, 72500);
    this.products[6] = new product(654, 'LG', 'Airconditioners', 20, 52500);
    this.products[7] = new product(675, 'Crompton', 'Ceiling Fans', 25, 1500);
    this.products[8] = new product(2901, 'Carrier', 'Aircondirioners', 5, 50500);
    this.products[9] = new product(721, 'Usha', 'Table fans', 40, 1200);
    this.products[10] = new product(454, 'One+', 'Mobiles', 50, 82500);
  }

  // We want to fetch all the products from product API
  // http://localhost:8090/product/api1.0/productsinfo

  fetchAllProducts(): Observable<any>{
    const url: string = "http://localhost:8090/product/api1.0/productsinfo"
    return this.http.get(url)
  }

  addProduct(product:product): Observable<any>{
    const url: string = "http://localhost:8090/product/api1.0/addProduct"
    return this.http.post(url, product)
  }

  deleteProduct(id:number): Observable<any> {
    const url: string = "http://localhost:8090/product/api1.0/delete/" + id
    return this.http.delete(url)
  }

  updateProduct(product:product): Observable<any> {
    const url: string = "http://localhost:8090/product/api1.0/modify"
    return this.http.put(url, product)
  }
}