import { Injectable } from '@angular/core';
import { Data } from '../Mockdata';
import { Product } from '../Product';

@Injectable()
export class ProductService {

    products = Data;
  constructor() { }

  getProducts(){
    return this.products;
  }
  getProduct(id){
    return this.products.find(product => product.id == id);
  }
  
  removeProduct(id){
    return this.products = this.products.filter(product => product.id != id);
  }

  addProduct(product){
    
    let newObj = {id: 6, ...product};
    this.products.push(newObj);
  }
}