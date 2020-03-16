import { Component, OnInit } from '@angular/core';
import {product} from '../Product';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
product: Product []=[
  {id: 1,name: 'item 1', desc: 'mô tả sản phẩm 1'},
  {id: 2,name: 'item 2', desc: 'mô tả sản phẩm'},
]
}