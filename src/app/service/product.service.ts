import { Injectable } from '@angular/core';
import { Data } from '../Mockdata';
import { Product } from '../Product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class ProductService {
    api= 'https://5e7b1ae30e04630016332b0c.mockapi.io/product';
    // products = Data;
  constructor(
    private http: HttpClient
  ) { }

  getProducts(): Observable<Product[]>{
    // return this.products;
    return this.http.get<Product[]>(this.api);
  }
  getProduct(id): Observable<Product>{
    // return this.products.find(product => product.id == id);
    return this.http.get<Product>(`${this.api}/${id}`);
  }
  
  removeProduct(id){
    return this.products = this.products.filter(product => product.id != id);
  }

  addProduct(product){
    
    let newObj = {id: 6, ...product};
    this.products.push(newObj);
  }
}