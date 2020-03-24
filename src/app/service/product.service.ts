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

  }

  addProduct(product){
    
    let newObj = {id: 6, ...product};
    this.products.push(newObj);
  }
}